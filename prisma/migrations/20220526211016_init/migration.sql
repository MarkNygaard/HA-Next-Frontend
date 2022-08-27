/*
  Warnings:

  - You are about to drop the `_EntityToEntityType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_EntityToEntityType_B_index";

-- DropIndex
DROP INDEX "_EntityToEntityType_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_EntityToEntityType";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EntityType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityTypeId" TEXT NOT NULL,
    "entityId" TEXT,
    CONSTRAINT "EntityType_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_EntityType" ("entityTypeId", "id") SELECT "entityTypeId", "id" FROM "EntityType";
DROP TABLE "EntityType";
ALTER TABLE "new_EntityType" RENAME TO "EntityType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
