import { Flip, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Intro = () => {
  return (
    <div
      id="section-1"
      className="relative flex justify-center h-screen items-center gap-20"
    >
      <span className="absolute left-1/2 -translate-x-1/2 top-8 text-green text-[28px] font-medium">
        INTRO
      </span>

      <div className="h-[603px] aspect-[0.93729] img-wrapper-1"></div>

      <div className="flex flex-col max-w-[714px] gap-6">
        <h2 className="text-green text-[45px] font-turret leading-[1] uppercase">
          This is where passion, innovation, and the future of gaming converge.
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
          community ownership. The Sombra Network is designed to offer technical
          and creative support to a community vision. Through blockchain
          governance our DAO dictates the development of our products, stories
          and even the team.
        </p>
      </div>
    </div>
  );
};

export default Intro;
