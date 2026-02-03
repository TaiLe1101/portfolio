import { SkillLogo } from "@/types/skill-logo";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const SKILL_LOGOS: SkillLogo[] = [
  {
    src: "/images/skills/css.png",
    alt: "CSS",
  },
  {
    src: "/images/skills/docker.png",
    alt: "Docker",
  },
  {
    src: "/images/skills/git.png",
    alt: "Git",
  },
  {
    src: "/images/skills/html.png",
    alt: "HTML",
  },
  {
    src: "/images/skills/jenkins.png",
    alt: "Jenkins",
  },
  {
    src: "/images/skills/linux.png",
    alt: "Linux",
  },
  {
    src: "/images/skills/mongo.png",
    alt: "MongoDB",
  },
  {
    src: "/images/skills/mysql.png",
    alt: "MySQL",
  },
  {
    src: "/images/skills/nestjs.png",
    alt: "NestJS",
  },
  {
    src: "/images/skills/nginx.png",
    alt: "Nginx",
  },
  {
    src: "/images/skills/nodejs.png",
    alt: "Node.js",
  },
  {
    src: "/images/skills/react.png",
    alt: "React",
  },
  {
    src: "/images/skills/scss.png",
    alt: "SCSS",
  },
  {
    src: "/images/skills/ts.png",
    alt: "TypeScript",
  },
  {
    src: "/images/skills/tw.png",
    alt: "Tailwind CSS",
  },
];

export function SkillsMarquee() {
  return (
    <div className="w-full bg-[#d9e7fd] relative py-4 bg-linear-to-b from-[#fdfbfe] to-[#dae7f0] dark:from-[#06091d] dark:to-[#000309]">
      <Marquee speed={75} gradient={true} gradientColor={"255, 255, 255"}>
        {SKILL_LOGOS.map((logo, index) => (
          <Image
            key={index}
            draggable={false}
            src={logo.src}
            alt={logo.alt}
            width={60}
            height={60}
            className="h-15 w-15 mx-10 select-none"
          />
        ))}
      </Marquee>
    </div>
  );
}
