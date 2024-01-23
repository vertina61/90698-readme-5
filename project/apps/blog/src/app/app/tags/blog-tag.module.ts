import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/shared/blog/models';
import { BlogTagRepository } from './blog-tag.repository';
import { BlogTagController } from './tags.controller';
import { BlogTagService } from './tags.service';

@Module({
  imports: [PrismaClientModule],
  providers: [BlogTagRepository, BlogTagService],
  controllers: [BlogTagController]
})
export class BlogTagModule {}
