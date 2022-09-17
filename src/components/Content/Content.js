import React, { useEffect, useRef } from "react";
import { Container, Section } from "../../globalStyles";
import {
  ContentRow,
  ContentColumn,
  TextWrapper,
  ImgWrapper,
  TopLine,
  Img,
  Heading,
  Subtitle,
  ContentButton
} from "./ContentStyles";

import { useInView } from "framer-motion";
import { useAnimationControls } from "framer-motion";

const Content = ({primary, topLine, headline, description, buttonLabel, img, alt, inverse, reverse}) => {

    const initial={
        opacity:0,
        y:30
    };
    const animation=useAnimationControls();

    const ref=useRef(null);
    const inView= useInView(ref,{once:true});

   useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1,
                y:0,
            });
        }
    }, [inView, animation]);

    return (
      <Section inverse={inverse} ref={ref} >
        <Container>
          <ContentRow reverse={reverse}>
            <ContentColumn>
              <TextWrapper>
                <TopLine
                  initial={initial}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  animate={animation}
                >
                  {topLine.text}
                </TopLine>
                <Heading
                  initial={initial}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  animate={animation}
                  inverse={inverse}
                >
                  {headline}
                </Heading>
                <Subtitle
                  initial={initial}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  animate={animation}
                  inverse={inverse}
                >
                  {description}
                </Subtitle>
                <ContentButton
                  initial={initial}
                  transition={{ delay: 1, duration: 0.6 }}
                  animate={animation}
                  inverse={inverse}
                  primary={primary}
                >
                  {buttonLabel}
                </ContentButton>
              </TextWrapper>
            </ContentColumn>
            <ContentColumn
              initial={initial}
              transition={{ delay: 0.5, duration: 0.6 }}
              animate={animation}
            >
              <ImgWrapper>
                <Img
                  src={img}
                  alt={alt}
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
              </ImgWrapper>
            </ContentColumn>
          </ContentRow>
        </Container>
      </Section>
    );
  };

export default Content;
