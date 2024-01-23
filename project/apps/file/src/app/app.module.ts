import { Module } from '@nestjs/common';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { FileConfigModule } from '@project/shared/config/file';


@Module({
  imports: [
    FileUploaderModule,
    FileConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
