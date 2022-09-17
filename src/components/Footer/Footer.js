import React from 'react';
import{
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLogo,
    SocialIcon,
    FooterSocialIcon,
    FooterWrapper,
    FooterAddress,
    FooterColumn,
    FooterGrid
} from './FooterStyles'

import {footerData, footerSocialData} from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

const logo=require('../../rsc/shield.png')

const Footer = () => {
    return (
        <Section padding="4rem 0 2rem 0">
            <FooterWrapper>
                <FooterGrid justify="space-between">
                    <FooterColumn id="footerLOGO">
                        <FooterLogo to="/">
                            <SocialIcon src={logo}/>
                                SquareSecure
                        </FooterLogo>
                        <FooterAddress>
                            A random address 🙂
                        </FooterAddress>

                        <Row align="center" margin="auto 0 0 0" gap="1rem" >
                            {footerSocialData.map((social, index)=>(
                                <FooterSocialIcon
                                key={index}
                                href={social.link}
                                target="_blank"
                                aria-label={social.name}
                                >
                                    {social.icon}
                                </FooterSocialIcon>
                            ))}
                        </Row>
                    </FooterColumn>
                    {footerData.map((footerItem, index)=>
                        <FooterLinkItems key={index}>
                            <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
                            {footerItem.links.map((link,linkIndex)=>(
                                <FooterLink key={linkIndex} to="/">
                                    {link}
                                </FooterLink>
                            ))}
                        </FooterLinkItems>
                    )}
                </FooterGrid>
            </FooterWrapper>
        </Section>
    );
};

export default Footer;