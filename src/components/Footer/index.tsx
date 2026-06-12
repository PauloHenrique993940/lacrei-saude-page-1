'use client';

import React, { memo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Logo } from '../Logo';

const FooterContainer = styled.footer`
    background-color: #ffffff;
    margin-top: 4rem;
`;

const Divider = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    border-top: 1px solid #b9e6dc;
`;

const MainSection = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2.5rem;
        padding: 2rem 1rem;
    }
`;

const LogoSection = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        width: 30px;
        height: 30px;
        fill: #0b9469;
    }
`;

const Cnpj = styled.p`
    color: #5b6470;
    font-size: 0.75rem;
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 5.5rem;

    @media (max-width: 1024px) {
        gap: 3rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
        color: #1b2128;
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }
`;

const InternalFooterLink = styled(Link)`
    color: #1b2128;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: #018762;
    }

    &:focus-visible {
        outline: 2px solid #018762;
        outline-offset: 2px;
    }
`;

const ExternalFooterLink = styled.a`
    color: #1b2128;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: #018762;
    }

    &:focus-visible {
        outline: 2px solid #018762;
        outline-offset: 2px;
    }
`;

const BottomSection = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding: 2.5rem 2rem 0;

    @media (max-width: 768px) {
        padding: 2rem 1rem 0;
    }
`;

const WarningText = styled.div`
    color: #5b6470;
    font-size: 0.875rem;
    line-height: 1.65;

    p {
        margin-bottom: 0.75rem;
    }

    a {
        color: #5b6470;
        text-decoration: none;
    }
`;

const FooterBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Copyright = styled.p`
    font-size: 0.75rem;
    color: #5b6470;
`;

const BackToTop = styled.button`
    background-color: #ffffff;
    border: 2px solid #018762;
    border-radius: 10px;
    cursor: pointer;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        background-color: #f2fbf8;
        transform: translateY(-1px);
    }

    &:focus-visible {
        outline: 2px solid #018762;
        outline-offset: 3px;
    }

    svg {
        width: 20px;
        height: 20px;
        color: #018762;
        stroke-width: 3px;
    }
`;

export const Footer = memo(() => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FooterContainer role="contentinfo">
            <Divider />

            <MainSection>
                <LogoSection>
                    <Logo />
                    <SocialIcons aria-label="Redes sociais">
                        <a
                            href="https://www.facebook.com/lacrei.saude/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook site externo - abrirá uma nova janela"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.89 8.44-9.9 0-5.54-4.5-10.02-10-10.02z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/lacrei.saude"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram site externo - abrirá uma nova janela"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2c-2.1 0-3.6 1.5-3.6 3.6v8.4c0 2.1 1.5 3.6 3.6 3.6h8.4c2.1 0 3.6-1.5 3.6-3.6V7.6c0-2.1-1.5-3.6-3.6-3.6H7.6zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm5.2-1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/lacrei"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin site externo - abrirá uma nova janela"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.1 0-1.9.6-2.2 1.2v-1h-3v7.8h3v-4.2c0-.6.4-1.1 1.1-1.1.7 0 1.1.5 1.1 1.1v4.2h3M8 18.5v-7.8H5v7.8h3M6.5 6.7c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7 1 .1 1.7-.7 1.7-1.7 0-1-.7-1.7-1.7-1.7z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:contato@lacreisaude.com.br"
                            aria-label="E-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a Lacrei Saúde como destinatário"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </SocialIcons>
                    <Cnpj>Cnpj: 51.265.351/0001-65</Cnpj>
                </LogoSection>

                <NavLinks aria-label="Navegação do rodapé">
                    <LinkColumn>
                        <h4>Lacrei Saúde</h4>
                        <InternalFooterLink href="/quem-somos">
                            Quem Somos
                        </InternalFooterLink>
                        <InternalFooterLink href="/quem-somos#proposito">
                            Nosso Propósito
                        </InternalFooterLink>
                        <InternalFooterLink href="/quem-somos#missao-visao-valores">
                            Missão, Visão e Valor
                        </InternalFooterLink>
                        <InternalFooterLink href="/acessibilidade">
                            Acessibilidade
                        </InternalFooterLink>
                    </LinkColumn>

                    <LinkColumn>
                        <h4>Saúde</h4>
                        <ExternalFooterLink href="https://paciente.lacreisaude.com.br">
                            Buscar atendimento
                        </ExternalFooterLink>
                        <ExternalFooterLink href="https://profissional.lacreisaude.com.br">
                            Oferecer atendimento
                        </ExternalFooterLink>
                    </LinkColumn>

                    <LinkColumn>
                        <h4>Segurança e Privacidade</h4>
                        <InternalFooterLink href="/politica-de-privacidade">
                            Política de Privacidade
                        </InternalFooterLink>
                        <InternalFooterLink href="/termos-de-uso">
                            Termos de Uso
                        </InternalFooterLink>
                        <InternalFooterLink href="/direitos-de-titular">
                            Direitos de Titular
                        </InternalFooterLink>
                    </LinkColumn>
                </NavLinks>
            </MainSection>

            <Divider />

            <BottomSection>
                <WarningText>
                    <p>
                        A Lacrei Saúde não oferece tratamento médico
                        emergencial. Em caso de emergência procure o hospital
                        mais próximo.
                    </p>
                    <p>
                        Em caso de auxílio psicológico, ligue para 188 (CVV) ou
                        acesse o site{' '}
                        <a
                            href="https://cvv.org.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Centro de valorização da vida link externo - o link abre uma nova janela"
                        >
                            www.cvv.org.br
                        </a>
                    </p>
                </WarningText>

                <FooterBottomRow>
                    <Copyright>
                        Copyright © 2024 Lacrei Saúde. Todos os direitos
                        reservados. CNPJ: 51.265.351/0001-65
                    </Copyright>
                    <BackToTop
                        onClick={scrollToTop}
                        aria-label="Voltar ao topo da página"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </BackToTop>
                </FooterBottomRow>
            </BottomSection>
        </FooterContainer>
    );
});
