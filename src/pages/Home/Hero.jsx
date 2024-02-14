import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative isolate min-h-[780px] h-screen pt-10 z-10 bg-black">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.png"
          alt="bg"
          className="w-full h-full object-cover object-center"
        />

        <img
          src="/hero-bg-overlay.png"
          alt="overlay"
          className="absolute w-full h-full top-0"
        />
      </div>

      <div className="w-[90%] max-w-[1470px]">
        <div className="flex flex-col items-start max-w-[550px] gap-10">
          <h1 className="font-turret font-medium text-[90px] leading-[1]">
            WELCOME TO SOMBRA NETWORK
          </h1>
          <p className="text-[21px] leading-[1.19]">
            SOMBRA NETWORK, WHERE YOUR VOICE DESIGNS WORLDS AND YOUR PASSION
            FORGES LEGACIES. A COMMUNITY LED ENTERTAINMENT DAO.
          </p>
          <Button className="mt-8">WATCH REEL</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
