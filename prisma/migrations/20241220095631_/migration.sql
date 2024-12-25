-- AlterTable
ALTER TABLE `paymentvoucher` MODIFY `razorpayOrderId` VARCHAR(191) NULL,
    MODIFY `razorpayPaymentId` VARCHAR(191) NULL,
    MODIFY `razorpaySignature` VARCHAR(191) NULL;
