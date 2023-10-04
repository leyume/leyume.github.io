import React, { useState } from "react";
import { skills } from "../../data";

function SkillList({ type }) {
  const data = () => (!type ? [] : skills.filter((s) => s.type === type))[0]?.tools;

  return (
    <div className="flex flex-wrap mt-12 justify-center">
      {data()?.map((d, i) => (
        <div key={i} className="text-center py-12 grid gap-6 justify-center b-dashed b-white b-opacity-10 w-1/6">
          <img src={`/images/${d.icon}.png`} alt={d.name} className="h-18 mx-auto" />
          {d.name}
        </div>
      ))}
    </div>
  );
}

export default function Skill() {
  const [type, setType] = useState("");

  return (
    <>
      <div
        className="flex justify-center gap-6 uppercase text-xs tracking-[0.25rem] flex-wrap w-3/4 mx-auto
            [&>a]:b-solid [&>a]:b-2 [&>a]:b-white [&>a]:b-opacity-30 [&>a]:py-4 [&>a]:px-8 [&>a]:rounded-2em [&>a]:whitespace-nowrap
            [&>a:hover]:bg-orange-4 [&>a:hover]:bg-opacity-100 [&>a:hover]:text-brand-dark [&>a:hover]:font-bold [&>a:hover]:rounded-xl
            [&>a.active]:bg-orange-4 [&>a.active]:text-brand-dark [&>a.active]:font-bold [&>a.active]:rounded-xl"
      >
        <a onClick={() => setType("")} className={type ? "" : "active"}>
          All
        </a>
        {skills.map((skill, i) => (
          <a key={i} onClick={() => setType(skill.type)} className={skill.type == type ? "active" : ""}>
            {skill.type}
          </a>
        ))}
      </div>

      {!type &&
        skills.map((skill, i) => (
          <div key={i}>
            <h3 className="text-center pt-20">{skill.type}</h3>
            <SkillList type={skill.type} />
          </div>
        ))}

      {!!type && <h3 className="text-center pt-20">{type}</h3>}
      <SkillList type={type} />
    </>
  );
}
