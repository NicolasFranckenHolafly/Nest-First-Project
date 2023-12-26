import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth') //here we are defining the base route for this controller
export class AuthController {
  constructor(private authService: AuthService) {} //here we 'instance' the service

  @Post('signup') //here we are defining the route for this method
  //here we are defining the method for this route
  signup(@Body() dto: AuthDto) {
    //we call it "dto" because it's a Data Transfer Object
    return this.authService.signup(dto); //here we are calling the service method
  }

  @HttpCode(HttpStatus.OK) //here we are defining the status code for this route (default is 201, but we want 200)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
