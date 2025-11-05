import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  private users: CreateUserDto[] = [];

  userRegistration(user: CreateUserDto): string {
    this.users.push(user);
    return `User ${user.name} registered successfully!`;
  }
}
