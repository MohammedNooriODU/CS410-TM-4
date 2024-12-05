import Image from "next/image";

export default function CompetitionMatrix() {
  return (
    <div className="bg-transparent min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-5xl font-bold">Competition Matrix</h1>
        <Image
          src="../competitionmatrix.png"
          width={1000}
          height={1000}
          alt="current-process-flow-image"
        />
      </div>
    </div>
  );
}
