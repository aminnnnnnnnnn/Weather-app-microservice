import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';



async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const { GATEWAY_PORT } = process.env;
    const port = GATEWAY_PORT || 3001;

    await app.enableCors(); // Enable CORS for all routes


    await app.listen(port);
}
bootstrap()
