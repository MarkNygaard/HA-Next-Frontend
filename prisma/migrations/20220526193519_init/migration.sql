-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entityName" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "sorting" INTEGER NOT NULL,
    "icon" TEXT NOT NULL,
    "tempId" TEXT NOT NULL,
    "humidId" TEXT NOT NULL,
    "climateId" TEXT NOT NULL,
    "windowId" TEXT NOT NULL,
    "doorId" TEXT NOT NULL,
    "subLight" TEXT NOT NULL
);
