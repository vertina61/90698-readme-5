import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@project/shared/blog/models';
import { BlogTagController } from './tags.controller';
import { BlogTagService } from './tags.service';
import { BlogTagRepository } from './blog-tag.repository';

@Module({
  imports: [PrismaClientModule],
  controllers: [BlogTagController],
  providers: [BlogTagRepository,BlogTagService],
})
export class TagsModule {}
