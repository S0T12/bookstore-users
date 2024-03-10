import { Controller, NotFoundException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'createUser' })
  async create(
    @Payload() createUserDto: CreateUserDto,
  ): Promise<User | NotFoundException> {
    return this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUser' })
  async findAll(): Promise<User[] | NotFoundException> {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'findOneUser' })
  async findOne(@Payload() id: string): Promise<User | NotFoundException> {
    return this.userService.findOneById(id);
  }

  @MessagePattern({ cmd: 'findOneByEmail' })
  async findOneByEmail(
    @Payload() email: string,
  ): Promise<User | NotFoundException> {
    return this.userService.findOneByEmail(email);
  }

  @MessagePattern({ cmd: 'findOneByUsername' })
  async findOneByUsername(
    @Payload() username: string,
  ): Promise<User | NotFoundException> {
    return this.userService.findOneByUsername(username);
  }

  @MessagePattern({ cmd: 'updateUser' })
  async update(
    @Payload() updateUserDto: UpdateUserDto,
  ): Promise<User | NotFoundException> {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern({ cmd: 'removeUser' })
  async remove(@Payload() id: string): Promise<User | NotFoundException> {
    return this.userService.remove(id);
  }
}
