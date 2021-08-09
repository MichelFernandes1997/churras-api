import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AuthenticationService } from './authentication.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

class AuthUserDTO {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  create(@Body() user: AuthUserDTO) {
    return this.authenticationService.login(user);
  }
}
