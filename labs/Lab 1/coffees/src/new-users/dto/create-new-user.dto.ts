import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateNewUserDto {

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    age: number;

}
