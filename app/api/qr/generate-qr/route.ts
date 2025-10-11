import { NextResponse } from "next/server";
import QRcode from "qrcode";

export async function GET() {
  try {
    //link to page url gallery
    const directLink = "/user";

    const generationOfQRcode = await QRcode.toDataURL(directLink);

    return NextResponse.json({ qrcode: generationOfQRcode });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || error },
      { status: 500 }
    );
  }
}
