import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
//using npm i class-validator (for this to work we need to add app.useGlobalPipes(new ValidationPipe()); in main.ts)

export class AuthDto {
  //here we change interface for class
  @IsEmail() //here we validate the email
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
