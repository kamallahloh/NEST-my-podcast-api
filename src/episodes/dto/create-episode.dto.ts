import { ValidationPipe } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { isStringObject } from 'util/types';

// DTO Date Transfer Object
// class validator and class transformer
// npm i class-validator class-transformer

export class CreateEpisodeDto {
  // more about it with Pipes
  @IsString() // validation decorator
  name: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @IsDate() // validation decorator
  @Type(() => Date) // validation decorator otherwise Error will occur since there is no Date Type in Json only Strings.
  publishedAt: Date;
}
