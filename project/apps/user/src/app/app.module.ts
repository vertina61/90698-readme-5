import { Module } from '@nestjs/common';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { BlogUserModule } from './app/blog-user/blog-user.module';
import { SharedConfigUserModule } from '@project/shared/config/user';

@Module({

  imports: [AuthenticationModule, BlogUserModule, SharedConfigUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
