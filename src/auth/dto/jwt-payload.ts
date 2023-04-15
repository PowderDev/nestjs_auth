import { plainToInstance, instanceToPlain, Expose } from 'class-transformer';

export type JwtPayload = {
  id: number;
  username: string;
};

export class JwtPayloadDto {
  static create(data: JwtPayload) {
    return plainToInstance(this, data, { excludeExtraneousValues: true });
  }

  toPlain() {
    return instanceToPlain(this);
  }

  @Expose()
  id: number;

  @Expose()
  username: string;
}
