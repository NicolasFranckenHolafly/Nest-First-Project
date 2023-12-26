import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';

import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    //"user" is the variable name of the return value of the GetUser() decorator
    //this is a custom decorator
    //prisma creates a User type automatically

    return user;
  }
}
