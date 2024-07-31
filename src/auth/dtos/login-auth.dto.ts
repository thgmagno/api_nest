import { IsEmail, IsStrongPassword } from 'class-validator'

export class LoginAuthDTO {
  @IsEmail()
  email: string

  @IsStrongPassword(
    {
      minLength: 4,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    },
    {
      message:
        'Password must be 1 min lower case, 1 upper case, 1 char numeric and min length 4 characters',
    },
  )
  password: string
}
