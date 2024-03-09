import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UserService } from 'src/users/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUser() {
    const users = await this.userService.findUser();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    // const { ...userDetails, confirmPassword } = createUserDto;
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async DeleteUserById(@Param('id') id: string) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/profile')
  createUserProfile(
    @Param('id') id: string,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id') id: string,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userService.creatUserPost(id, createUserPostDto);
  }
}
