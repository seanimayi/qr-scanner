import { NextResponse } from "next/server";
import QRcode from "qrcode";

export async function GET(): Promise<Response> {
  try {
    // Replace with your actual deployed base URL (when hosted on Vercel)
    const baseURL = 'https://your-project-name.vercel.app';
    const directLink = `${baseURL}/user`;

    const generationOfQRcode = await QRcode.toDataURL(directLink);

    return NextResponse.json({ qrcode: generationOfQRcode });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
