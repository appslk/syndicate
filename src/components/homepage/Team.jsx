import teamBgWebp from "../../assets/images/homepage/team/team-bg.webp";
import teamBgPng from "../../assets/images/homepage/team/team-bg.png";
import { team } from "../../lib/constants";

const Team = () => {
  return (
    <section className="relative h-fit">
      {/* Bg image with black tint */}
      <picture>
        <source srcSet={teamBgWebp} />
        <img
          src={teamBgPng}
          alt="NFT"
          className="absolute bottom-0 h-[90%] w-full object-cover sm:h-[85%] lg:h-4/5 2xl:h-[77.5%]"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </picture>

      <div className="section-padding relative container mx-auto">
        {/* Leaklight */}
        <div className="absolute top-0 left-0 aspect-square w-3/4 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

        {/* Title */}
        <h1 className="font-ddt-extended gradient-text relative mx-auto w-fit py-[1.5em] text-center text-[26px] leading-none sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]">
          Team
        </h1>

        {/* Cards */}
        <div className="relative grid grid-cols-1 gap-[1em] py-[5em] lg:grid-cols-2">
          {team.map(({ id, name, role, desc }) => (
            <article
              key={id}
              className="rounded-[0.3em] bg-black px-[2.5em] py-[2em]"
            >
              <h3 className="font-ddt-extended mb-[0.2em] text-[1.5em] leading-none">
                {name}
              </h3>
              <h5 className="gradient-text font-ddt mb-[0.8em] w-fit text-[1.2em]">
                {role}
              </h5>
              <p className="font-ddt-extended text-justify">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
