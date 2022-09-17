import React, { useState } from "react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/CarouselData";
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./CarouselStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Find out more
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <HiArrowNarrowLeft onClick={sliderRef?.slickPrev} />
            <HiArrowNarrowRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
              {el.title}
            </TextWrapper>
          </ImageWrapper>
          
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
