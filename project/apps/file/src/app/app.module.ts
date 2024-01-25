import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { FileConfigModule, getMongooseOptions } from '@project/shared/config/file';


@Module({
  imports: [
    FileUploaderModule,
    FileConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
