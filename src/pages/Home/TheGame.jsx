import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TheGame = () => {
  const wrapper = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const slides = document.querySelectorAll(".the-game-slide");

      const totalWidth = [...slides].reduce((a, b) => a + b.offsetWidth, 0);

      const offset = (totalWidth - window.innerWidth) * -1;

      gsap.to(container.current, {
        x: offset,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pinSpacing: true,
          pin: wrapper.current,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div
      ref={wrapper}
      className="h-screen w-full flex relative isolate overflow-x-clip"
    >
      <span className=" z-10 absolute left-1/2 -translate-x-1/2 top-8 text-green text-[28px] font-medium">
        THE GAME
      </span>

      <div className="flex w-full" ref={container}>
        <div className="the-game-slide relative h-full px-4 pt-[13.89vh] w-full flex-shrink-0">
          <img
            src="/game-slide-1-bg.png"
            alt="space"
            className="absolute left-0 top-0 w-[67.7%] h-full object-cover -z-10"
          />

          <img
            src="/the-game-earth.png"
            alt="earth"
            className="w-[73.52vh] absolute right-[9vh]"
          />

          <h2 className="max-w-[652px] font-medium text-green font-turret text-[13.89vh] leading-[1]">
            TOXIC TWILIGHT
          </h2>

          <img
            src="/open-world.png"
            alt="our open world"
            className="w-[32.96vh] ml-[2.5vh]"
          />

          <div className="relative w-max ml-[11vh] mt-[2vh]">
            <img
              src="/game-slide-1-text-bg.png"
              alt="bg"
              className="w-[70.97vh]"
            />

            <span className="text-green font-turret font-medium text-[3.33vh] absolute top-[50%] left-[4%] ">
              01
            </span>

            <p className="absolute w-[59.5%] left-[29%] top-[10%] text-[2.78vh] font-medium font-turret leading-[1.1]">
              DIVE INTO OUR MAGNUM OPUS OUR OPEN WORLD GAME PLAYS OUT ON
              ILLUSION ISLE, A SPRAWLING 15 DISTRICT INTERWOVEN SOCIETY, EMERGED
              FROM THE ASHES OF A GLOBAL CATASTROPHE.
            </p>
          </div>
        </div>

        <div className="the-game-slide relative h-full px-4 pt-[13.89vh] min-w-[263vh] flex-shrink-0">
          <img
            src="/the-game-code-1.gif"
            alt="code"
            className="absolute bottom-[5%] -left-[3%] w-[40vh]"
          />

          <div className="absolute top-[15.8%] left-[3.1%] w-[58.1vh]">
            <img
              src="/game-slide-2-text-bg.png"
              alt="text bg"
              className="w-full -z-10"
            />
            <span className="text-black font-turret font-medium text-[3.33vh] absolute top-[20%] left-[4%] ">
              02
            </span>
            <h6 className="font-turret text-[3vh] font-medium leading-[1.2] text-black absolute top-[8%] left-[18%] w-[65%]">
              UNFETTERED INDUSTRIAL GROWTH AND CARELESS DISREGARD FOR THE
              ENVIROMENT LED TO AN INSURMOUNTABLE GLOBAL WARMING.
            </h6>
            <p className="text-[1.55vh] leading-[1.46] text-black left-[18%] top-[53%] w-[62%] absolute">
              THE ICE CAPS MELTED AND FLOODED THE EARTH, SPREADING A COCKTAIL OF
              POLLUTANTS AND UNKNOWN CHEMICAL AGENTS, HIDDEN IN THE PERMAFROST,
              INTO THE ATMOSPHERE, RADICALLY ALTERING LIFE ON EARTH.{" "}
            </p>
          </div>

          <div className="h-full min-w-[76%] absolute right-0 top-0 aspect-[1925/1080]">
            <img
              src="/game-slide-2-bg.gif"
              alt="bg"
              style={{
                maskImage: 'url("/public/game-slide-2-mask.png")',
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
              className="mask h-full w-full object-cover -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGame;
