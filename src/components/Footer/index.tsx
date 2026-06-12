'use client';

import React, { memo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    border-top: 3px solid;
    border-image: linear-gradient(
            90deg,
            #e40303 0%,
            #ff8c00 16.67%,
            #ffff00 33.33%,
            #008026 50%,
            #004cff 66.67%,
            #750787 100%
        )
        1;
    margin-top: 4rem;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem 2rem;
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem;
    }
`;

const LogoSection = styled.div`
    flex-shrink: 0;
`;

const LogoText = styled(Link)`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
`;

const NavSection = styled.div`
    display: flex;
    gap: 3rem;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 4rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h4 {
        color: ${(props) => props.theme?.colors?.secondary || '#1F2937'};
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.35rem;
    }
`;

const FooterLink = styled(Link)`
    color: ${(props) => props.theme?.colors?.text || '#485467'};
    font-size: 0.95rem;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        color: ${(props) => props.theme?.colors?.primary || '#018762'};
    }
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        justify-content: flex-start;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;

    svg {
        width: 22px;
        height: 22px;
        fill: ${(props) => props.theme?.colors?.secondary || '#1F2937'};
    }
`;

const Cnpj = styled.p`
    color: ${(props) => props.theme?.colors?.text || '#515151'};
    font-size: 0.75rem;
    margin-top: 0.75rem;
`;

export const Footer = memo(() => {
    return (
        <FooterContainer role="contentinfo">
            <Container>
                <LogoSection>
                    <LogoText href="/">Lacrei Saúde</LogoText>
                    <BottomRow>
                        <SocialIcons aria-label="Redes sociais">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.89 8.44-9.9 0-5.54-4.5-10.02-10-10.02z" />
                            </svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2c-2.1 0-3.6 1.5-3.6 3.6v8.4c0 2.1 1.5 3.6 3.6 3.6h8.4c2.1 0 3.6-1.5 3.6-3.6V7.6c0-2.1-1.5-3.6-3.6-3.6H7.6zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5.2-1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
                            </svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.1 0-1.9.6-2.2 1.2v-1h-3v7.8h3v-4.2c0-.6.4-1.1 1.1-1.1.7 0 1.1.5 1.1 1.1v4.2h3M8 18.5v-7.8H5v7.8h3M6.5 6.7c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 .1 1.7-.7 1.7-1.7 0-1-.7-1.7-1.7-1.7z" />
                            </svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </SocialIcons>
                    </BottomRow>
                    <Cnpj>Cnpj: 51.365.311/0001-44</Cnpj>
                </LogoSection>

                <NavSection>
                    <NavLinks aria-label="Navegação do rodapé">
                        <LinkColumn>
                            <h4>Lacrei Saúde</h4>
                            <FooterLink href="/quem-somos">
                                Quem Somos
                            </FooterLink>
                            <FooterLink href="/quem-somos">
                                Nosso Propósito
                            </FooterLink>
                            <FooterLink href="/quem-somos">
                                Missão, Visão e Valor
                            </FooterLink>
                        </LinkColumn>

                        <LinkColumn>
                            <h4>Saúde</h4>
                            <FooterLink href="/">Buscar Atendimento</FooterLink>
                            <FooterLink href="/profissional">
                                Oferecer Atendimento
                            </FooterLink>
                        </LinkColumn>

                        <LinkColumn>
                            <h4>Segurança e Privacidade</h4>
                            <FooterLink href="/seguranca">
                                Política de Privacidade
                            </FooterLink>
                            <FooterLink href="/seguranca">
                                Termos de Uso
                            </FooterLink>
                            <FooterLink href="/acessibilidade">
                                Acessibilidade
                            </FooterLink>
                            <FooterLink href="/duvidas-frequentes">
                                Dúvidas Frequentes
                            </FooterLink>
                        </LinkColumn>
                    </NavLinks>
                </NavSection>
            </Container>
        </FooterContainer>
    );
});
