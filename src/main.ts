import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // After merging the main-db branch, this code will need update
  const config = new DocumentBuilder()
    .setTitle('TrackMyBet')
    .setDescription('TrackMyBet API description')
    .setVersion('1.0')
    .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
