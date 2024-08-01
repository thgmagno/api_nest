import {
  Table,
  Column,
  Model,
  DataType,
  BeforeSave,
} from 'sequelize-typescript'
import * as bcrypt from 'bcrypt'

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string

  @BeforeSave
  static async hashPassword(user: User) {
    if (user.password) {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      user.password = hashedPassword
    }
  }
}
