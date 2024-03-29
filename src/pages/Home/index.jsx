import React, { useRef, useState } from "react";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Intro from "./Intro";
import TheGame from "./TheGame";
import { useGSAP } from "@gsap/react";
import { Flip, ScrollTrigger } from "gsap/all";

const Home = () => {
  const [activePlace, setActivePlace] = useState(0);

  const state = useRef();

  useGSAP(
    () => {
      new ScrollTrigger({
        trigger: "#section-1",
        end: "bottom bottom",
        onEnter: () => {
          setActivePlace(1);
        },
        onEnterBack: () => {
          setActivePlace(1);
        },
      });
      new ScrollTrigger({
        trigger: "#section-2",
        end: "bottom bottom",
        onEnter: () => {
          setActivePlace(2);
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      if (activePlace === 1) {
        const prevImg = document.querySelector(".obj");
        state.current = Flip.getState(prevImg);

        document.querySelector(".obj-wrapper-1").appendChild(prevImg);
        Flip.from(state.current, {
          scrollTrigger: {
            trigger: "#section-1",
            end: "bottom bottom",
            scrub: true,
          },
        });
      } else if (activePlace === 2) {
        const prevImg = document.querySelector(".obj");
        state.current = Flip.getState(prevImg);

        document.querySelector(".obj-wrapper-2").appendChild(prevImg);
        Flip.from(state.current, {
          scrollTrigger: {
            trigger: "#section-2",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    },
    { dependencies: [activePlace], revertOnUpdate: true }
  );

  return (
    <>
      <Hero />
      <Marquee />
      <Intro />

      <div
        id="section-2"
        className="relative min-h-[900px] flex flex-row-reverse justify-center h-screen items-center gap-20"
      >
        <span className="absolute left-1/2 -translate-x-1/2 top-8 text-green text-[28px] font-medium">
          INTRO
        </span>

        <div className="h-[553px] w-[505px] bg-[red] obj-wrapper-2"></div>

        <div className="flex flex-col max-w-[714px] gap-6">
          <h2 className="text-green text-[45px] font-turret leading-[1] uppercase">
            This is where passion, innovation, and the future of gaming
            converge.
          </h2>

          <p className="text-[21px] leading-[1.19]">
            Born from a fusion of dedicated crypto advocates, cutting-edge tech
            aficionados, and ardent gamers, we're not just a DAO driven
            entertainment studio; we are a thriving ecosystem reshaping the
            contours of web 3 gaming and narrative episodic content.
            <br />
            <br />
            We revolutionize the traditional norms of gaming & episodic stories
            through meaningful web 3 ownership, loyalty and true creative
            community ownership. The Sombra Network is designed to offer
            technical and creative support to a community vision. Through
            blockchain governance our DAO dictates the development of our
            products, stories and even the team.
          </p>
        </div>
      </div>

      <TheGame />
    </>
  );
};

export default Home;
