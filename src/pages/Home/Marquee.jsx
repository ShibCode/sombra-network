import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Marquee = () => {
  const marquee = useRef();
  const wrapper = useRef();
  const object = useRef();

  useGSAP(
    () => {
      gsap.to(marquee.current, {
        scrollTrigger: {
          trigger: "body",
          endTrigger: wrapper.current,
          end: "bottom bottom",
          pin: marquee.current,
          pinSpacing: false,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );

  useEffect(() => {
    gsap.to(".home-marquee-slide", {
      xPercent: -100,
      ease: "none",
      repeat: Infinity,
      duration: 10,
    });
  }, []);

  return (
    <div className="h-screen font-turret grid place-items-center" ref={wrapper}>
      <div className="h-[478px] aspect-[0.93729]" ref={object}>
        <img
          src="/logo-object.gif"
          alt="logo object"
          className="z-10 pointer-events-none w-full h-full object-cover"
        />
      </div>

      <div
        className="flex absolute top-1/2 -translate-y-1/2 w-full overflow-clip"
        ref={marquee}
      >
        <div className="w-full flex-shrink-0 home-marquee-slide text-[6.25vw] font-medium flex justify-around">
          <span>PLAY IT</span>
          <span>SHAPE IT</span>
          <span>OWN IT</span>
        </div>
        <div className="w-full flex-shrink-0 home-marquee-slide text-[6.25vw] font-medium flex justify-around">
          <span>PLAY IT</span>
          <span>SHAPE IT</span>
          <span>OWN IT</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
