import { plainToInstance, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class AuthDto {
  static create(data: AuthDto) {
    return plainToInstance(this, data, { excludeExtraneousValues: true });
  }

  @IsString()
  @MinLength(3)
  @Expose()
  username: string;

  @IsString()
  @MinLength(6)
  @Expose()
  password: string;
}
