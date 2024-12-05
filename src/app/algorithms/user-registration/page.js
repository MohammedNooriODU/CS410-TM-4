import Image from "next/image";

export default function UserRegistration() {
  return (
    <div className="bg-transparent min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-5xl font-bold">User Registration Algorithm</h1>
        <Image
          src="../registrationalgorithm.png"
          width={1500}
          height={1500}
          alt="current-process-flow-image"
        />
      </div>
    </div>
  );
}
