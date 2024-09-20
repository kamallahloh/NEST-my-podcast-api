import { ValidationPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { isStringObject } from 'util/types';

// DTO Date Transfer Object
// class validator and class transformer
// npm i class-validator class-transformer

export class CreateEpisodeDto {
  // more about it with Pipes
  @IsString() // validation decorator
  @ApiProperty({
    description: 'string name',
    example: 'Kamal',
  })
  name: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'is it featured',
    required: false,
    example: true,
  })
  featured?: boolean;

  @IsDate() // validation decorator
  @Type(() => Date) // validation decorator otherwise Error will occur since there is no Date Type in Json only Strings.
  @ApiProperty({
    description: 'when it is published',
    example: '1991-04-01',
  })
  publishedAt: Date;
}
