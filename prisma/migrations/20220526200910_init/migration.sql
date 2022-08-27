/*
  Warnings:

  - You are about to drop the column `entityType` on the `Entity` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "EntityType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityTypeId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EntityToEntityType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EntityToEntityType_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EntityToEntityType_B_fkey" FOREIGN KEY ("B") REFERENCES "EntityType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityName" TEXT NOT NULL,
    "entityId" TEXT NOT NULL
);
INSERT INTO "new_Entity" ("entityId", "entityName", "id") SELECT "entityId", "entityName", "id" FROM "Entity";
DROP TABLE "Entity";
ALTER TABLE "new_Entity" RENAME TO "Entity";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_EntityToEntityType_AB_unique" ON "_EntityToEntityType"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityToEntityType_B_index" ON "_EntityToEntityType"("B");
