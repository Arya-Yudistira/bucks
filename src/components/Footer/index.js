import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia,  
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRight, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements'
const Footer = () => {

  const toggleHome = ()=>{
      scroll.scrollToTop();
  }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Career</FooterLink>
                            <FooterLink to='/signin'>Investor</FooterLink>
                            <FooterLink to='/signin'>Term of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Career</FooterLink>
                            <FooterLink to='/signin'>Investor</FooterLink>
                            <FooterLink to='/signin'>Term of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Career</FooterLink>
                            <FooterLink to='/signin'>Investor</FooterLink>
                            <FooterLink to='/signin'>Term of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonial</FooterLink>
                            <FooterLink to='/signin'>Career</FooterLink>
                            <FooterLink to='/signin'>Investor</FooterLink>
                            <FooterLink to='/signin'>Term of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        bucks
                    </SocialLogo>
                    <WebsiteRight>bucks &#169; {new Date().getFullYear} All Rights Reserved </WebsiteRight>
                    <SocialIcons>
                    <SocialIconLink href="/" target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target='_blank' aria-label='Linkedin'>
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer