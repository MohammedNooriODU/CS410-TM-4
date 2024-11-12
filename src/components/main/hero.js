import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Image
            src="logo.png"
            className="drop-shadow-lg"
            width={500}
            height={500}
          />
          <h1 className="text-6xl font-bold drop-shadow-lg">GrubTurbo</h1>
          <p className="py-6 text-3xl font-bold drop-shadow-lg">
            Pick your next meal in{" "}
            <span className="text-yellow-400">Turbo</span> time!
          </p>
          {/* <button className="btn btn-secondary text-white text-lg drop-shadow-lg">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}
