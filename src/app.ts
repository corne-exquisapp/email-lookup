import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

export async function bootstrapApplication() {
	const application = await NestFactory.create<NestExpressApplication>(AppModule);
	application.setGlobalPrefix('api');
	application.enableCors();
	application.useGlobalPipes(new ValidationPipe({ whitelist: true }));
	return { application };
}