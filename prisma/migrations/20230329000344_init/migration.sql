-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fineshed" BOOLEAN NOT NULL,
    "dead_zone" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
