"use client";

import { useRouter } from "next/navigation";
import { MdSwipeRight } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-5">
        <h1
          className="text-3xl font-poppins font-bold text-slate-800
        "
        >
          Welcome admin!!
        </h1>
        <p className="text-slate-800 font-inter font-semibold">
          Click the button below to go to your dashboard.
        </p>
        <button
          onClick={() => router.push("./admin")}
          className="h-[50px] w-[200px] text-white bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg mt-5 hover:from-blue-600 hover:to-purple-700 flex gap-5 items-center"
        >
          Go to Dashboard <MdSwipeRight size={18} />
        </button>
      </div>
    </>
  );
}
