-- AlterTable
ALTER TABLE "User" ALTER COLUMN "equityPercentage" DROP NOT NULL,
ALTER COLUMN "leadershipScore" SET DATA TYPE DOUBLE PRECISION;
