import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles'

const hero=require("../../rsc/hero.mov");

function Hero() {
    return (
        <HeroSection>
            <HeroVideo src={hero} autoPlay loop muted/>

            <Container>
                <MainHeading>We value your data, it is safe with us</MainHeading>
                    <HeroText>
                        We got sustainable, cost effective security systems for customers all around the globe.
                    </HeroText>
                    <ButtonWrapper>
                        <Link to="signup">
                            <Button>Get Started</Button>
                        </Link>
                        <Link to="pricing">
                        <HeroButton>Our offers</HeroButton>
                        </Link>
                    </ButtonWrapper>
            </Container>
        </HeroSection>
    );
}

export default Hero;