"use client";

import { MdQrCode } from "react-icons/md";

export default function GenerateCard() {
  return (
    <div className="w-[75%] py-14 px-10 bg-white rounded-3xl drop-shadow-2xl flex justify-center items-center flex-col gap-3 font-poppins">
      <button className="h-[50px] w-[200px] rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-600 text-white flex gap-2 items-center hover:scale-90 duration-150 font-bold">
        <MdQrCode size={18} /> Generate QR code
      </button>
      <div className='bg-slate-100 rounded-xl w-full h-full'>

      </div>
    </div>
  );
}
