import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string): Promise<User | null> {
    return await this.prisma.user.findFirst({ where: { username } });
  }

  async findById(id: number): Promise<User | null> {
    return await this.prisma.user.findFirst({ where: { id } });
  }

  async createUser(dto: UserDto): Promise<User> {
    return await this.prisma.user.create({ data: dto });
  }

  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
