import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  isImportant: boolean;

  @IsNotEmpty()
  @IsString()
  duration: string;

  @IsNotEmpty()
  user: User;
}
