import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'userService: This action adds a new user';
  }

  findAll() {
    console.log(
      `userService: This action returns all users\n this is shared: \n }`,
    );
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `userService: This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `userService: This action updates a #${id} user`;
  }

  remove(id: number) {
    return `userService: This action removes a #${id} user`;
  }
}
