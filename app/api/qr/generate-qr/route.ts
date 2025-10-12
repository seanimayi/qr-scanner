import { NextResponse } from "next/server";
import QRcode from "qrcode";

export async function GET() {
  try {
    //link to page url gallery
    const baseURL = 'http://.app'
    const directLink = `${baseURL}/user`;

    const generationOfQRcode = await QRcode.toDataURL(directLink);

    return NextResponse.json({ qrcode: generationOfQRcode });
  } catch (error) {
    return NextResponse.json(
      { error: error},
      { status: 500 }
    );
  }
}
