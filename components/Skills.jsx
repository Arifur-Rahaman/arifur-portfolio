import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png";
import javascriptLogo from "../public/assets/skills/javascript.png";
import reactLogo from "../public/assets/skills/react.png";
import muiLogo from "../public/assets/skills/mui.png";
import redux from "../public/assets/skills/redux.png";
function Skills() {
  const skills = [
    {
      name: "HTML",
      logo: htmlLogo,
    },
    {
      name: "CSS",
      logo: cssLogo,
    },
    {
      name: "Javascript",
      logo: javascriptLogo,
    },
    {
      name: "React",
      logo: reactLogo,
    },
    {
      name: "Material UI",
      logo: muiLogo,
    },
    {
      name: "Redux",
      logo: redux,
    },
  ];
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
