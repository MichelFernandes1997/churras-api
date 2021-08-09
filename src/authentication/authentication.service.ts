import { Injectable } from '@nestjs/common';
import { ParticipantesService } from 'src/participantes/participantes.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: ParticipantesService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string): Promise<any> {
    const user = await this.usersService.findByEmail(userEmail);

    if (user?.password === userPassword) {
      const { _id, email, nickname } = user;

      return { _id, email, nickname };
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user._id,
      nickname: user.nickname,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
