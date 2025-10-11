import GenerateCard from "../component/generate_qr";

export default function AdminPage() {
  return (
    <>
      <h1 className="font-bold font-poppins md:text-4xl text-2xl my-6  text-slate-800">Admin QR Code Generator</h1>
      <p className="text-slate-800 font-inter font-semibold">Generate QR codes that link to your gallery</p>
      <GenerateCard />
    </>
  );
}
