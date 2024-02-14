import React, { useEffect } from "react";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Flip, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
