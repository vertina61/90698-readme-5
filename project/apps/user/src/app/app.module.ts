import { Module } from '@nestjs/common';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { BlogUserModule } from './app/blog-user/blog-user.module';
import { SharedConfigUserModule } from 'libs/shared/config/user/src/lib/shared-config-user.module'

@Module({

  imports: [AuthenticationModule, BlogUserModule, SharedConfigUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
