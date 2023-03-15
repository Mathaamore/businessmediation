import React from "react";
import Retraite from "../../images/bg_retraite.jpg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Retraite} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Business Mediation</HeroH1>
        <HeroP>Le double diplôme ingénierie - innovation</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
