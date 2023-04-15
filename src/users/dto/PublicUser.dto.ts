import { plainToInstance, Expose } from 'class-transformer';

export class PublicUserDto {
  static create(data: PublicUserDto): PublicUserDto | null {
    if (!data) {
      return null;
    }

    return plainToInstance(this, data, { excludeExtraneousValues: true });
  }

  @Expose()
  id: number;

  @Expose()
  username: string;
}
