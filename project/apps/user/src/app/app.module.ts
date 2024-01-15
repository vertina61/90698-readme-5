import { Module } from '@nestjs/common';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { BlogUserModule } from './app/blog-user/blog-user.module';

@Module({

  imports: [AuthenticationModule, BlogUserModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
