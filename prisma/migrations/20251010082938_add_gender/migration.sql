/*
  Warnings:

  - Added the required column `gender` to the `rabbits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neutered` to the `rabbits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."rabbits" ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "neutered" TEXT NOT NULL;
