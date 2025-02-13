import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";

import cardHeader from "../../assets/images/homepage/collection/card-header.png";
import OutlineButton from "../ui/buttons/OutlineButton";
import { collections } from "../../lib/constants";
import "../../assets/css/collection.css";

const SwiperCustomNav = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute bottom-0 left-[35%] z-10 -translate-y-[38%] cursor-pointer text-[30px] opacity-80 hover:opacity-100 focus:opacity-100 xl:left-[30%] 2xl:left-[35%]"
      >
        <BiSolidLeftArrow />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-[35%] bottom-0 z-10 -translate-y-[38%] cursor-pointer text-[30px] opacity-80 hover:opacity-100 focus:opacity-100 xl:right-[30%] 2xl:right-[35%]"
      >
        <BiSolidRightArrow />
      </button>
    </>
  );
};

const Collections = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="bg-black/70 pb-[5em]">
      <div className="section-padding relative container mx-auto">
        {/* Leaklight */}
        <div className="absolute top-0 left-0 aspect-square w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

        {/* Title */}
        <h1 className="font-ddt-extended gradient-text relative mx-auto w-fit py-[1.5em] text-center text-[26px] leading-none sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]">
          Collections
        </h1>

        {/* Carousel */}
        <Swiper
          speed={2000}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={pagination}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              speed: 3000,
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1024: {
              speed: 4000,
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 40,
            },
            1536: {
              speed: 5000,
              slidesPerView: 4,
              slidesPerGroup: 2,
              spaceBetween: 50,
            },
          }}
          style={{
            "--swiper-pagination-bullet-horizontal-gap": "0.5em",
            "--swiper-pagination-bullet-vertical-gap": "0.5em",
          }}
        >
          {/* Carousel items */}
          {collections.map(({ id, name, webpImage, pngImage }) => (
            <SwiperSlide key={id}>
              <div className="relative flex items-center justify-center pb-[80px]">
                <article className="w-[280px] max-w-[280px]">
                  {/* Title area */}
                  <div className="relative size-fit">
                    <img
                      src={cardHeader}
                      alt="Background image for the title"
                      className="mb-[0.5em] object-contain"
                    />
                    <h4 className="font-ddt absolute top-0 bottom-0 left-[5%] my-auto h-fit w-[14ch] text-[0.9em]">
                      {name.toUpperCase()}
                    </h4>
                  </div>

                  {/* Image */}
                  <div
                    className="mb-[0.5em] aspect-[2/3] bg-[#F0811A] p-0.5"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 60%, 96% 63%, 96% 72%, 100% 75%, 100% 100%, 0 100%, 0 25%, 4% 22%, 4% 15%, 0 12%)",
                    }}
                  >
                    <picture>
                      <source srcSet={webpImage} />
                      <img
                        src={pngImage}
                        alt="NFT One"
                        className="h-full w-full object-cover"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 100% 60%, 96% 63%, 96% 72.5%, 100% 75.5%, 100% 100%, 0 100%, 0 25%, 4% 22%, 4% 14.5%, 0 11.5%)",
                        }}
                      />
                    </picture>
                  </div>

                  {/* Button */}
                  <OutlineButton className="w-full rounded-none text-[1.3em]">
                    OpenSea
                  </OutlineButton>
                </article>
              </div>
            </SwiperSlide>
          ))}
          <SwiperCustomNav />
        </Swiper>
      </div>
    </section>
  );
};

export default Collections;
