"use client";

import { MdDownload, MdQrCode } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
export default function GenerateCard() {
  const [qrcode, setQrcode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const generateQRcode = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/qr/generate-qr");
      const data = await res.json();
      if (!res.ok) {
        console.log(data.data);
      }
      setQrcode(data.qrcode);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:w-[55%] w-[95%] py-14 px-10 bg-white rounded-3xl drop-shadow-2xl flex justify-center items-center flex-col gap-3 font-poppins my-8">
      <button
        onClick={generateQRcode}
        className="h-[60px] w-[240px] rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-600 text-white  hover:scale-110 duration-150 font-bold"
      >
        {loading == true ? (
          <div className="flex gap-2 items-center justify-center">
            <MdQrCode size={18} /> <p>Generating...</p>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center">
            <MdQrCode size={18} /> <p>Generate QR code</p>
          </div>
        )}
      </button>
      <div className=" gap-3 mt-10 w-full">
        {qrcode ? (
          <div className=" bg-slate-100 rounded-xl w-full h-full py-10 flex justify-center items-center flex-col gap-3">
            {loading == true ? (
              <div className="animate-spin h-[30px] w-[30px] rounded-full border-2 border-t-slate-200 border-r-blue-500 border-b-slate-200 border-l-slate-200 bg-transparent "></div>
            ) : (
              ""
            )}
            <Image
              src={qrcode}
              alt="qr-code"
              height={200}
              width={200}
              className="rounded-lg"
            />{" "}
            <a
              href={qrcode}
              download="gallery_qr.png"
              className="w-[230px] py-2 mt-5 rounded-lg bg-gradient-to-tr from-green-500 to-green-600 text-white flex gap-2 items-center justify-center hover:scale-110 duration-150 font-bold"
            >
              Download QR Code <MdDownload />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
