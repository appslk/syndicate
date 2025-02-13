import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";

import { faq } from "../../lib/constants";
import batRabbitThumbnail from "../../assets/images/homepage/faq/bat-rabbit-thumbnail.png";
import batRabbitMp4 from "../../assets/images/homepage/faq/bat-rabbit.mp4";
import batRabbitWebm from "../../assets/images/homepage/faq/bat-rabbit.webm";
import logoWebp from "../../assets/images/logo.webp";
import logoPng from "../../assets/images/logo.png";
import uncleRabbitWebp from "../../assets/images/homepage/faq/uncle-rabbit.webp";
import uncleRabbitPng from "../../assets/images/homepage/faq/uncle-rabbit.png";

const FAQ = () => {
  return (
    <section className="bg-black/70 pb-[5em]">
      <div className="section-padding container mx-auto">
        {/* Title */}
        <h1 className="font-ddt-extended gradient-text mx-auto w-fit py-[1.5em] text-center text-[26px] leading-none sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px]">
          FAQ
        </h1>

        <div className="relative grid grid-cols-1 gap-[1em] sm:grid-cols-12">
          {/* Leaklight */}
          <div className="absolute top-0 right-0 aspect-square w-3/4 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#F0811A38] blur-[100px] sm:w-3/5 lg:w-1/2"></div>

          {/* Division with video and logo */}
          <div className="relative col-span-6 hidden pb-[1em] sm:flex sm:flex-col sm:justify-between lg:col-span-5 2xl:col-span-4">
            <video
              autoPlay
              disablePictureInPicture
              disableRemotePlayback
              loop
              muted
              playsInline
              poster={batRabbitThumbnail}
              src={batRabbitWebm}
              className="w-fit rounded-[0.3em] object-cover"
            >
              <source src={batRabbitMp4} type="video/mp4" />
            </video>

            <picture>
              <source srcSet={logoWebp} />
              <img
                src={logoPng}
                alt="The official logo of Robotic Rabbit Syndicate"
                className="w-4/5 object-contain"
              />
            </picture>
          </div>

          {/* Empty div to create gap */}
          <div className="col-span-2 hidden 2xl:block"></div>

          {/* Division with accordion and FAQ image */}
          <div className="relative col-span-6 lg:col-span-7 2xl:col-span-6">
            <AccordionRoot type="single" defaultValue={faq[0].id} collapsible>
              {faq.map(({ id, question, answer }) => (
                <AccordionItem key={id} value={id}>
                  <AccordionHeader>
                    <AccordionTrigger>{question}</AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
            <picture>
              <source srcSet={uncleRabbitWebp} />
              <img
                src={uncleRabbitPng}
                alt="The Robotic Rabbit version of Uncle Sam"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
