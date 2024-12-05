import Image from "next/image";

export default function InfoCollection() {
  return (
    <div className="bg-transparent min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-5xl font-bold">
          Restaurant Information Collection Algorithm
        </h1>
        <Image
          src="../apialgorithm.png"
          width={2000}
          height={2000}
          alt="current-process-flow-image"
        />
      </div>
    </div>
  );
}
