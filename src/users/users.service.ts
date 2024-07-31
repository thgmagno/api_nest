import { Injectable } from '@nestjs/common'
import { User } from './model/user.model'
import { CreateUserDTO } from './dtos/create-user.dto'

@Injectable()
export class UsersService {
  async create(data: CreateUserDTO): Promise<User> {
    const user = new User()
    user.username = data.username
    user.email = data.email
    user.password = data.password

    return user.save()
  }
}
