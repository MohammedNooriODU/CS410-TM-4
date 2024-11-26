import Image from "next/image";

export default function CurrentProcessFlow() {
  return (
    <div className="bg-transparent min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-5xl font-bold">The Current Process Flow</h1>
        <Image
          src="../currentpf.png"
          width={800}
          height={800}
          alt="current-process-flow-image"
        />
      </div>
    </div>
  );
}
