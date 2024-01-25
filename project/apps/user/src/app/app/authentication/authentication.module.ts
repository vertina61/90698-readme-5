import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '../blog-user/blog-user.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [BlogUserModule,  NotificationsModule,],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
