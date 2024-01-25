import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { BlogUserModule } from './app/blog-user/blog-user.module';
import { SharedConfigUserModule, getMongooseOptions } from '@project/shared/config/user';
import { NotificationsModule } from './app/notifications/notifications.module';

@Module({

  imports: [AuthenticationModule,
    BlogUserModule,
    SharedConfigUserModule,
    NotificationsModule,
    MongooseModule.forRootAsync(
    getMongooseOptions()
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
