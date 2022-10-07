import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import InputDetails from "../../InputDetails";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <InputDetails></InputDetails>
      {/* <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} /> */}

      <Pricing />
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
