import { Injectable } from '@nestjs/common'
import { CreateUserDTO } from 'src/users/dtos/create-user.dto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(data: CreateUserDTO) {
    return this.usersService.create(data)
  }
}
