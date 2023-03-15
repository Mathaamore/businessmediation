import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    Astyled,
} from './FooterElements'

const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights><b><i>BM Alumni by 
                            <Astyled href="https://www.linkedin.com/in/morel-mathieu/"> M. Morel</Astyled>
                            </i></b> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/businessmediation5.0/" target="_blank" aria-label="Twitter">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/groups/8679328/" target="_blank" aria-label="Discord">
                                <FaLinkedinIn/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
