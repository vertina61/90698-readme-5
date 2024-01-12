import { Module } from '@nestjs/common';
import { CommentsModule } from './app/comments/comments.module';
import { LikesModule } from './app/likes/likes.module';
import { PostsModule } from './app/posts/posts.module';
import { TagsModule } from './app/tags/tags.module';

@Module({
  imports: [CommentsModule, LikesModule, PostsModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
