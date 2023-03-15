import styled from "styled-components";
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: #fff;
`

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #010101;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(LinkS)`
    color: #010101;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #000;
        transition: 0.3s ease-out;
    }
`

export const FooterLinkDOM = styled(Link)`
    color: #010101;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #000;
        transition: 0.3s ease-out;
    }
`

export const FooterLinkExt = styled.a`
    color: #010101;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #000;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #010101;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-style: italic;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`

export const WebsiteRights = styled.small`
    color: #010101;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color: #010101;
    font-size: 24px;
    margin-left: 8px;
    margin-right: 8px;

    &:hover {
        color: #e2001a;
        transition: 0.3s ease-out;
    }
`

export const Astyled = styled.a`
    color: #010101;
    text-decoration: none !important;

    &:hover {
        color: #e2001a;
        transition: 0.3s ease-out;
    }
`