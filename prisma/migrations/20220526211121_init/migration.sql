/*
  Warnings:

  - You are about to drop the column `entityId` on the `EntityType` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_EntityToEntityType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EntityToEntityType_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EntityToEntityType_B_fkey" FOREIGN KEY ("B") REFERENCES "EntityType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EntityType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityTypeId" TEXT NOT NULL
);
INSERT INTO "new_EntityType" ("entityTypeId", "id") SELECT "entityTypeId", "id" FROM "EntityType";
DROP TABLE "EntityType";
ALTER TABLE "new_EntityType" RENAME TO "EntityType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_EntityToEntityType_AB_unique" ON "_EntityToEntityType"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityToEntityType_B_index" ON "_EntityToEntityType"("B");
