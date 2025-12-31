import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // makes config accessible anywhere
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      // optional: ignore .env if not found
      ignoreEnvFile: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
