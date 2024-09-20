import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// openAPI and swagger

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bookstore')
    .setDescription('API documentation')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  // create the swagger doc.
  const document = SwaggerModule.createDocument(app, config);
  // config the swagger site
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
