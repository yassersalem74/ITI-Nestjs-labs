import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  age: number;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}
