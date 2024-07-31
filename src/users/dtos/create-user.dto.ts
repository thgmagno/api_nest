import { IsString, Length, IsEmail, IsStrongPassword } from 'class-validator'

export class CreateUserDTO {
  @IsString({ message: 'Name is required' })
  @Length(1, 20)
  readonly username: string

  @IsEmail()
  readonly email: string

  @IsStrongPassword({
    minLength: 4,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  })
  readonly password: string
}
