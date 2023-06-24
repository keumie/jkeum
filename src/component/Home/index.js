import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Video from "../../video/video.mp4";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeName,
  HomeP,
  HomeBtnWrapper,
  ArrowRight,
  ArrowDown,
  Button,
} from "./HomeElement";

const Main = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer>
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type="videos/mp4" />
      </HomeBg>
      <HomeContent>
        <HomeH1>
          WELCOME TO MY WEBSITE <br /> MY NAME IS
          <HomeName> JOEY KEUM</HomeName>
        </HomeH1>
        <HomeBtnWrapper>
          <Button
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            <Typography>Press Here To Get Started</Typography>
            {hover ? <ArrowDown /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Main;
