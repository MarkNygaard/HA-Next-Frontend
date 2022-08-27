/*
  Warnings:

  - You are about to drop the column `subLight` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `entity` on the `Settings` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_RoomToSubLight" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RoomToSubLight_A_fkey" FOREIGN KEY ("A") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RoomToSubLight_B_fkey" FOREIGN KEY ("B") REFERENCES "SubLight" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EntityToSettings" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EntityToSettings_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EntityToSettings_B_fkey" FOREIGN KEY ("B") REFERENCES "Settings" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityName" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "sorting" INTEGER NOT NULL,
    "icon" TEXT NOT NULL,
    "tempId" TEXT NOT NULL,
    "humidId" TEXT NOT NULL,
    "climateId" TEXT NOT NULL,
    "windowId" TEXT NOT NULL,
    "doorId" TEXT NOT NULL
);
INSERT INTO "new_Room" ("climateId", "doorId", "entityId", "entityName", "humidId", "icon", "id", "sorting", "tempId", "windowId") SELECT "climateId", "doorId", "entityId", "entityName", "humidId", "icon", "id", "sorting", "tempId", "windowId" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE TABLE "new_Settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "settingName" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_Settings" ("icon", "id", "settingName") SELECT "icon", "id", "settingName" FROM "Settings";
DROP TABLE "Settings";
ALTER TABLE "new_Settings" RENAME TO "Settings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToSubLight_AB_unique" ON "_RoomToSubLight"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToSubLight_B_index" ON "_RoomToSubLight"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EntityToSettings_AB_unique" ON "_EntityToSettings"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityToSettings_B_index" ON "_EntityToSettings"("B");
