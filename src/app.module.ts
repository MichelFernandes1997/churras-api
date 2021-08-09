import { Module } from '@nestjs/common';
import { ParticipantesModule } from './participantes/participantes.module';
import { ChurrasModule } from './churras/churras.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.ENV === 'development' ? 'mongodb' : 'mongodb+srv'}://${
        process.env.DB_USER
      }:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    ParticipantesModule,
    ChurrasModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
