import Image from "next/image";

export default function MemberCard(props) {
  return (
    <div className="card bg-white lg:w-80 w-64 shadow-xl text-black">
      <img src={props.pfp} alt={props.name + "image"} className="rounded-xl" />

      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
