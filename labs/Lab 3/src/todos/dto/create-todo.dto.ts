import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
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
}
