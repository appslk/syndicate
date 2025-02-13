import heroBgWebp from "../../assets/images/homepage/hero/hero-bg.webp";
import heroBgPng from "../../assets/images/homepage/hero/hero-bg.png";
import logoSmallWebp from "../../assets/images/homepage/logo-small.webp";
import logoSmallPng from "../../assets/images/homepage/logo-small.png";
import loginThumbnail from "../../assets/images/homepage/hero/login-thumbnail.png";
import loginMp4 from "../../assets/images/homepage/hero/login.mp4";
import loginWebm from "../../assets/images/homepage/hero/login.webm";

const Hero = () => {
  return (
    <section className="relative h-fit bg-cover">
      {/* Hero bg */}
      <picture>
        <source srcSet={heroBgWebp} />
        <img
          src={heroBgPng}
          alt="Hero background"
          className="absolute inset-0 h-[80%] w-full object-cover"
        />
      </picture>
      {/* Black tint */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero content */}
      <div className="section-padding relative container mx-auto">
        {/* Title */}
        <h1 className="font-ddt-extended gradient-text mx-auto w-fit pt-[1.2em] text-center text-[26px] leading-none uppercase sm:pt-[1.4em] sm:text-[30px] md:pt-[1.5em] md:text-[34px] lg:pt-[1.6em] lg:text-[38px] xl:pt-[1.8em] xl:text-[42px] 2xl:pt-[2em] 2xl:text-[46px]">
          Robotic rabbit <br /> syndicate
        </h1>

        {/* Underline */}
        <div className="mx-auto my-[1.5em] h-[0.3em] w-[80%] rounded-[1em] bg-gradient-to-r from-[#FFBE25] to-[#F0811A] xl:my-[2em] xl:h-[0.4em]"></div>

        {/* Paragraph one */}
        <p className="font-ddt relative z-[2] mb-[1em] text-justify lg:text-center">
          Dive deep into the decentralized realm of web3, where the lines
          between technology, entertainment, and innovation blur. Here at the
          Robotic Rabbit Syndicate, we&apos;re pioneering a new age of digital
          storytelling. Witness our league of technologically advanced robotic
          rabbits, each with their unique abilities and powers. Together, they
          rise against dark forces, ensuring the digitalverse remains untainted.
          Own a piece of this dynamic narrative with our exclusive NFTs.
        </p>

        {/* Paragraph two */}
        <p className="font-ddt relative z-[2] mb-[1em] text-justify lg:text-center">
          As the blockchain beats with the heart of every adventure our rabbits
          embark on, be part of a movement that transcends traditional
          entertainment. Join us, as we craft high-quality, relatable IP in the
          ever-evolving landscape of the metaverse. The future of entertainment
          awaits. Are you ready to hop in?
        </p>

        {/* Video with leaklight */}
        <div className="relative z-[1] mx-auto mt-[1.5em] aspect-[16/9] w-[90%] rounded-[1em] shadow-[0_0_15px_8px_#00000080] sm:w-[70%]">
          {/* Leaklight */}
          <div className="absolute inset-0 m-auto aspect-square h-[120%] rounded-full bg-[#FFBE258F] blur-[100px]"></div>

          {/* Title  */}
          <div className="relative flex items-center justify-between rounded-t-[1em] bg-[#0E0E0E] px-[3em] py-[0.6em] xl:px-[4em]">
            <h4 className="gradient-text font-ddt text-[1.25em]">Minting</h4>
            <picture>
              <source srcSet={logoSmallWebp} />
              <img
                src={logoSmallPng}
                alt="The official logo of Robotic Rabbit Syndicate"
                className="w-[3em] object-contain"
              />
            </picture>
          </div>

          {/* Video */}
          <video
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            poster={loginThumbnail}
            src={loginWebm}
            className="relative h-full w-full rounded-b-[1em] object-cover"
          >
            <source src={loginMp4} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
