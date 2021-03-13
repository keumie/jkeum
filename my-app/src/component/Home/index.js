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
        <HomeP>I am a new graduate ready to tackle the world</HomeP>
        <HomeBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            <Typography>Get Started</Typography>
            {hover ? <ArrowDown /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default Main;
