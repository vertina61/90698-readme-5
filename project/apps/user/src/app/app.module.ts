import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { BlogUserModule } from './app/blog-user/blog-user.module';
import { SharedConfigUserModule, getMongooseOptions } from '@project/shared/config/user';

@Module({

  imports: [AuthenticationModule,
    BlogUserModule,
    SharedConfigUserModule,
    MongooseModule.forRootAsync(
    getMongooseOptions()
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
