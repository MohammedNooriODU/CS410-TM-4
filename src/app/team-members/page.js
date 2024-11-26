import MemberCard from "@/components/cards/member_card";

export default function TeamMembers() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col gap-6 justify-center py-8 px-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 lg:gap-32">
        <MemberCard
          name="Mohammed Noori"
          pfp="moe.png"
          description="is an undergraduate student majoring in computer science. On his free time, Moe likes to watch TV shows."
        />
        <MemberCard
          name="Josh Hardy"
          pfp="josh.png"
          description="is an undergraduate student majoring in computer science. Enjoys viewing Competitive Video Games."
        />
        <MemberCard
          name="Qin Davis"
          pfp="qin.png"
          description="is an undergraduate student majoring in computer science. On his free time, Qin likes to eat and exercise."
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 lg:gap-32">
        <MemberCard
          name="Grey Kopf"
          pfp="grey.png"
          description="is an undergraduate student majoring in computer science. He likes to draw, read, and program."
        />
        <MemberCard
          name="Shon Taylor"
          pfp="shon.png"
          description="is an undergraduate student majoring in computer science . Shon likes to roller skate and watch youtube videos."
        />
      </div>
    </div>
  );
}
