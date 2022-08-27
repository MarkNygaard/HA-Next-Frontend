/*
  Warnings:

  - You are about to drop the `_EntityToSettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToSubLight` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_EntityToSettings_B_index";

-- DropIndex
DROP INDEX "_EntityToSettings_AB_unique";

-- DropIndex
DROP INDEX "_RoomToSubLight_B_index";

-- DropIndex
DROP INDEX "_RoomToSubLight_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_EntityToSettings";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_RoomToSubLight";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubLight" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityName" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "roomId" TEXT,
    CONSTRAINT "SubLight_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SubLight" ("entityId", "entityName", "icon", "id") SELECT "entityId", "entityName", "icon", "id" FROM "SubLight";
DROP TABLE "SubLight";
ALTER TABLE "new_SubLight" RENAME TO "SubLight";
CREATE TABLE "new_Entity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityName" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "settingId" TEXT,
    CONSTRAINT "Entity_settingId_fkey" FOREIGN KEY ("settingId") REFERENCES "Settings" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Entity" ("entityId", "entityName", "id") SELECT "entityId", "entityName", "id" FROM "Entity";
DROP TABLE "Entity";
ALTER TABLE "new_Entity" RENAME TO "Entity";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
