import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { EMAIL_ADD_SUBSCRIBER_SUBJECT } from './mail.constant';
import { Subscriber } from '@project/shared/app/types';
import { NotificationsConfig } from '@project/shared/config/notifications';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  @Inject(NotificationsConfig.KEY)
  private readonly notificationsConfig: ConfigType<typeof NotificationsConfig>

  public async sendNotificationsNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      from: this.notificationsConfig.mail.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.firstname}`,
        email: `${subscriber.email}`,
      }
    })
  }
}
