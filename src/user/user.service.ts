import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcryptjs.hash(createUserDto.password, 10);
    const user: User = {
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
      password: hashedPassword,
    };
    return this.userRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOneById(id: string): Promise<User | NotFoundException> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      return new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | NotFoundException> {
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) {
      return new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async findOneByUsername(username: string): Promise<User | NotFoundException> {
    const user = await this.userRepository.findOneByUsername(username);
    if (!user) {
      return new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | NotFoundException> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      return new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = Object.assign(user, updateUserDto);
    return updatedUser;
  }

  async remove(id: string): Promise<User | NotFoundException> {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      return new NotFoundException(`User with ID ${id} not found`);
    }
    const removedUser = await this.userRepository.delete(id);
    return removedUser;
  }
}
