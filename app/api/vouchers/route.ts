import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const { title, price, discountPrice, description } = await request.json();

  try {
    const voucher = await db.voucher.create({
      data: {
        title,
        price,
        discountPrice,
        description,
      },
    });

    return NextResponse.json(voucher, { status: 201 });
  } catch (error) {
    console.error('Error creating voucher:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
export async function GET(request: Request) {

  try {
    // Fetch all vouchers from the database
    const vouchers = await db.voucher.findMany();

    // Send the vouchers data in the response
    return NextResponse.json(vouchers, { status: 200});
  } catch (error) {
    console.error('Error fetching vouchers:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}


export async function DELETE(request: Request) {
  // Extract voucher ID from request URL
  const { id } = await request.json(); 

  try {
    // Delete the voucher from the database
    const deletedVoucher = await db.voucher.delete({
      where: {
        id: id,  // Using voucher ID to delete the voucher
      },
    });

    // Return a response confirming deletion
    return NextResponse.json(deletedVoucher, { status: 200 });
  } catch (error) {
    console.error('Error deleting voucher:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
