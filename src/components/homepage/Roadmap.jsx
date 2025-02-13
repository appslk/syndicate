import { roadmap } from "../../lib/constants";

const Roadmap = () => {
  return (
    <section className="bg-black/70 pb-[5em]">
      <div className="section-padding relative container mx-auto">
        {/* Leaklight */}
        <div className="absolute top-0 right-0 aspect-square w-3/4 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

        {/* Title */}
        <h1 className="font-ddt-extended gradient-text relative mx-auto w-fit py-[1.5em] text-center text-[26px] leading-none sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]">
          Roadmap
        </h1>

        <div className="relative flex flex-col items-center justify-between gap-y-[8em] lg:flex-row lg:gap-0 lg:py-[10em]">
          {/* Path lines for larger screens (lg and above) */}
          {/* Left line */}
          <div
            className="absolute top-[2em] hidden bg-[#FFBE25] lg:left-[89px] lg:block lg:h-[140px] lg:w-[27.2%] xl:left-[103px] xl:w-[27.8%] 2xl:left-[119px] 2xl:h-[160px] 2xl:w-[28%]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 99% 100%, 99% 2.5%, 1% 2.5%, 1% 100%, 0 100%)",
            }}
          ></div>

          {/* Middle line */}
          <div
            className="absolute right-0 bottom-[1.4em] left-0 mx-auto hidden rotate-180 bg-[#FFBE25] lg:block lg:h-[140px] lg:w-[27.2%] xl:w-[27.8%] 2xl:h-[160px] 2xl:w-[28%]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 99% 100%, 99% 2.5%, 1% 2.5%, 1% 100%, 0 100%)",
            }}
          ></div>

          {/* Right line */}
          <div
            className="absolute top-[2em] hidden bg-[#FFBE25] lg:right-[89px] lg:block lg:h-[140px] lg:w-[27.2%] xl:right-[103px] xl:w-[27.8%] 2xl:right-[119px] 2xl:h-[160px] 2xl:w-[28%]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 99% 100%, 99% 2.5%, 1% 2.5%, 1% 100%, 0 100%)",
            }}
          ></div>

          {/* Cards */}
          {roadmap.map(({ id, webpImage, pngImage, title, desc }, i) => {
            const even = i % 2 === 0;

            return (
              <article
                key={id}
                className={`relative flex w-[260px] sm:w-2/3 sm:gap-[1em] lg:w-[180px] lg:gap-0 xl:w-[210px] xl:max-w-[210px] 2xl:w-[240px] 2xl:max-w-[240px] ${even ? "flex-col-reverse sm:flex-row lg:-translate-y-[10%] lg:flex-col" : "flex-col-reverse sm:flex-row-reverse lg:translate-y-[10%] lg:flex-col-reverse"}`}
              >
                {/* Path and dot for mobile devices (<640px) */}
                {i !== 0 && (
                  <>
                    <div className="absolute right-0 bottom-full left-0 mx-auto h-[25%] w-0.5 -translate-y-1/3 bg-[#FFBE25] sm:hidden"></div>
                    <div className="absolute right-0 bottom-full left-0 mx-auto aspect-square w-[10%] -translate-y-1/2 rounded-full bg-[#FFBE25] outline-1 outline-offset-8 outline-[#FFBE25] sm:hidden"></div>
                  </>
                )}

                {/* Path and dot for tablet devices (640px to 1023px) */}
                {!even && (
                  <>
                    <div className="absolute bottom-full left-1/4 hidden h-[40%] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-[#FFBE25] sm:block lg:hidden"></div>
                    <div className="absolute bottom-full left-1/4 hidden aspect-square w-[5%] -translate-x-1/2 -translate-y-full rounded-full bg-[#FFBE25] outline-1 outline-offset-8 outline-[#FFBE25] sm:block lg:hidden"></div>
                  </>
                )}
                {i === 2 && (
                  <>
                    <>
                      <div className="absolute right-1/4 bottom-full hidden h-[40%] w-0.5 -translate-y-1/2 translate-x-1/2 bg-[#FFBE25] sm:block lg:hidden"></div>
                      <div className="absolute right-1/4 bottom-full hidden aspect-square w-[5%] -translate-y-full translate-x-1/2 rounded-full bg-[#FFBE25] outline-1 outline-offset-8 outline-[#FFBE25] sm:block lg:hidden"></div>
                    </>
                  </>
                )}

                {/* Dots for larger screens (lg and above)  */}
                {!even && (
                  <div className="absolute top-0 right-0 left-0 mx-auto hidden aspect-square w-[10%] -translate-y-full rounded-full bg-[#FFBE25] outline-1 outline-offset-8 outline-[#FFBE25] lg:block"></div>
                )}
                {i === 2 && (
                  <div className="absolute top-full right-0 left-0 mx-auto hidden aspect-square w-[10%] translate-y-[40%] rounded-full bg-[#FFBE25] outline-1 outline-offset-8 outline-[#FFBE25] lg:block"></div>
                )}

                {/* Image */}
                <picture>
                  <source srcSet={webpImage} />
                  <img
                    src={pngImage}
                    alt="Placeholder"
                    className="relative z-[1] aspect-square w-full object-cover object-center sm:w-1/2 lg:w-full"
                  />
                </picture>

                {/* Text */}
                <div className="sm:w-1/2 lg:w-auto">
                  <h6 className="font-ddt mt-[0.9em] text-center sm:mt-0 lg:mt-[0.9em]">
                    {title.toUpperCase()}
                  </h6>
                  <p className="font-ddt my-[0.6em] text-center text-[0.75em]">
                    {desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
