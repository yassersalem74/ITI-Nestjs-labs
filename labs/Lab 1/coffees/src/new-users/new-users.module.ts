import { Module } from '@nestjs/common';
import { NewUsersService } from './new-users.service';
import { NewUsersController } from './new-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/new-user.entity';


@Module({
  imports:[MongooseModule.forFeature([{name:"Todo" , schema: UserSchema}])],
  controllers: [NewUsersController],
  providers: [NewUsersService],
})
export class NewUsersModule {}
