import Image from "next/image";

export default function CurrentProcessFlow() {
  return (
    <div className="bg-transparent min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-5xl font-bold">The Solution Process Flow</h1>
        <Image
          src="/solutionpf.png"
          width={800}
          height={800}
          alt="solution-process-flow-image"
        />
      </div>
    </div>
  );
}
