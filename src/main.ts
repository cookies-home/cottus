import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {ExpressAdapter,NestExpressApplication} from '@nestjs/platform-express'




async function bootstrap() {
  
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule,new ExpressAdapter());
  app.disable('x-powered-by');
  app.set('trust proxy', true);
  
  
  
}
bootstrap();