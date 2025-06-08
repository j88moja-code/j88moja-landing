/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `DemoRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `PendingDemoRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DemoRequest_email_key" ON "DemoRequest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PendingDemoRequest_email_key" ON "PendingDemoRequest"("email");
