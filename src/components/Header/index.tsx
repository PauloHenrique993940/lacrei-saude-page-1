'use client';

import React, { memo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../providers/AuthContext';

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 1.25rem 0;
    width: 100%;
    border-top: 4px solid;
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
    position: sticky;
    top: 0;
    z-index: 20;
`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        gap: 1rem;
        padding: 0 1rem;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        gap: 1.5rem;
    }
`;

const StyledLink = styled(Link)`
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const HelpButton = styled(Link)`
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const ActiveLink = styled(StyledLink)`
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: underline;
    text-underline-offset: 0.35rem;
`;

const Logo = styled(Link)`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        width: 100%;
        justify-content: space-between;
    }
`;

const LogoutButton = styled.button`
    background-color: ${(props) => props.theme?.colors?.primary || '#018762'};
    color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 0.625rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    border: 1px solid ${(props) => props.theme?.colors?.primary || '#018762'};
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.9;
    }
`;

const LoginLinkButton = styled(Link)`
    background-color: ${(props) => props.theme?.colors?.primary || '#018762'};
    color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 0.625rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid ${(props) => props.theme?.colors?.primary || '#018762'};
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`;

export const Header = memo(() => {
    const pathname = usePathname();
    const isCadastro = pathname.includes('/cadastro');
    const { isAuthenticated, user, logout, isReady } = useAuth();

    const NavLink = ({
        href,
        children,
    }: {
        href: string;
        children: React.ReactNode;
    }) => {
        const isActive = pathname === href;
        return isActive ? (
            <ActiveLink href={href}>{children}</ActiveLink>
        ) : (
            <StyledLink href={href}>{children}</StyledLink>
        );
    };

    return (
        <HeaderContainer role="banner">
            <Content>
                <Logo href="/" aria-label="Lacrei Saúde Home">
                    Lacrei Saúde
                </Logo>
                <HeaderActions>
                    <Nav role="navigation">
                        {!isCadastro && (
                            <NavLink href="/quem-somos">Quem Somos</NavLink>
                        )}
                        <HelpButton href="/ajuda">Ajuda</HelpButton>
                    </Nav>
                    {!isCadastro && !isReady && (
                        <LoginLinkButton href="/entrar">Entrar</LoginLinkButton>
                    )}
                    {!isCadastro && isReady && !isAuthenticated && (
                        <LoginLinkButton href="/entrar">Entrar</LoginLinkButton>
                    )}
                    {!isCadastro && isReady && isAuthenticated && (
                        <LogoutButton
                            onClick={logout}
                            aria-label={`Sair da conta de ${user?.email ?? 'usuário'}`}
                        >
                            Sair
                        </LogoutButton>
                    )}
                </HeaderActions>
            </Content>
        </HeaderContainer>
    );
});
