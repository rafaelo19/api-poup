import {NestFactory, Reflector} from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './infrastructure/interceptor/response.interceptor';
import {ClassSerializerInterceptor} from "@nestjs/common";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
