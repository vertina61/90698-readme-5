-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "is_draft" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video_url" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "quote_author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "link_url" TEXT NOT NULL,
    "likes_count" INTEGER NOT NULL,
    "comments_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_title_idx" ON "posts"("title");
