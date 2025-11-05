import { IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
