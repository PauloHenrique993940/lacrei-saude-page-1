'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding-top: 3rem;
    padding-bottom: 2rem;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        gap: 3rem;
    }
`;

const LogoSection = styled.div`
    flex-shrink: 0;
`;

const LogoText = styled(Link)`
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme?.colors?.primary || '#FF4D8D'};
    text-decoration: none;
`;

const NavSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 800px; /* Evita que o CNPJ se distancie excessivamente links */
`;

const NavLinks = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

const FooterLink = styled(Link)`
    color: ${(props) => props.theme?.colors?.secondary || '#7B2CBF'};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        opacity: 0.7;
    }
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1.5rem;

    svg {
        width: 32px;
        height: 32px;
        fill: ${(props) => props.theme?.colors?.primary || '#FF4D8D'};
    }
`;

const Cnpj = styled.p`
    color: ${(props) => props.theme?.colors?.text || '#515151'};
    font-size: 0.75rem;
`;

const Separator = styled.hr`
    border: none;
    border-top: 1px solid #eeeeee;
    margin: 2rem 0;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 4rem);
`;

const DisclaimerSection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Disclaimer = styled.p`
    color: ${(props) => props.theme?.colors?.text || '#515151'};
    font-size: 0.75rem;
    line-height: 1.5;
`;

export const Footer = () => {
    return (
        <FooterContainer role="contentinfo">
            <Container>
                <LogoSection>
                    <LogoText href="/">Lacrei Saúde</LogoText>
                </LogoSection>

                <NavSection>
                    <NavLinks aria-label="Navegação do rodapé">
                        <FooterLink href="/">Lacrei Saúde</FooterLink>
                        <FooterLink href="/profissional">
                            Pessoas Profissionais
                        </FooterLink>
                        <FooterLink href="/privacidade">
                            Política de Privacidade
                        </FooterLink>
                        <FooterLink href="/termos">Termos de Uso</FooterLink>
                    </NavLinks>

                    <BottomRow>
                        <SocialIcons aria-label="Redes sociais">
                            {/* Facebook */}
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.89 8.44-9.9 0-5.54-4.5-10.02-10-10.02z" />
                            </svg>
                            {/* Instagram */}
                            <svg viewBox="0 0 24 24">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2c-2.1 0-3.6 1.5-3.6 3.6v8.4c0 2.1 1.5 3.6 3.6 3.6h8.4c2.1 0 3.6-1.5 3.6-3.6V7.6c0-2.1-1.5-3.6-3.6-3.6H7.6zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5.2-1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
                            </svg>
                            {/* LinkedIn */}
                            <svg viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.1 0-1.9.6-2.2 1.2v-1h-3v7.8h3v-4.2c0-.6.4-1.1 1.1-1.1.7 0 1.1.5 1.1 1.1v4.2h3M8 18.5v-7.8H5v7.8h3M6.5 6.7c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 .1 1.7-.7 1.7-1.7 0-1-.7-1.7-1.7-1.7z" />
                            </svg>
                            {/* Email */}
                            <svg viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </SocialIcons>

                        <Cnpj>Cnpj: 51.365.311/0001-44</Cnpj>
                    </BottomRow>
                </NavSection>
            </Container>
        </FooterContainer>
    );
};
