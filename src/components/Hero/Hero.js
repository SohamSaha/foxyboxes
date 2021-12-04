import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo></HeroVideo>
            <Container>
                <MainHeading>Idiots at work</MainHeading>
                <HeroText>Look no further for some idiots</HeroText>
                <ButtonWrapper>
                    <Link to='/'>
                        <Button>
                            Get Started
                        </Button>
                    </Link>
                    <HeroButton>Yes</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero
