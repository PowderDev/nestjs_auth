import { IsString, MinLength } from 'class-validator';
import { plainToInstance, Expose } from 'class-transformer';

export class UserDto {
  static create(data: Omit<UserDto, 'id'>) {
    return plainToInstance(this, data, { excludeExtraneousValues: true });
  }

  @Expose()
  id: number;

  @IsString()
  @MinLength(3)
  @Expose()
  username: string;

  @IsString()
  @MinLength(6)
  @Expose()
  password: string;
}
