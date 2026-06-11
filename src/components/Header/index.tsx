'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 1.5rem 0;
    width: 100%;
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
        flex-direction: column;
        gap: 1.5rem;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.5rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        gap: 1.5rem;
    }
`;

const StyledLink = styled(Link)`
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme?.colors?.secondary || '#2D2D2D'};
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        color: ${(props) => props.theme?.colors?.primary || '#018762'};
    }
`;

const HelpButton = styled(Link)`
    font-weight: 700;
    font-size: 1rem;
    color: #018762;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    border: 2px solid #018762;
    border-radius: 8px;
    transition: all 0.2s;
    background-color: transparent;

    &:hover {
        background-color: #018762;
        color: white;
    }
`;

const ActiveLink = styled(StyledLink)`
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
`;

const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`;

const LoginButton = styled(Link)`
    background-color: ${(props) => props.theme?.colors?.primary || '#018762'};
    color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 0.625rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.9;
    }
`;

export const Header = () => {
    const pathname = usePathname();
    const isCadastro = pathname.includes('/cadastro');

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
                            <NavLink href="/quem-somos">Quem somos</NavLink>
                        )}
                        <HelpButton href="/ajuda">Ajuda</HelpButton>
                    </Nav>
                    {!isCadastro && (
                        <LoginButton href="/cadastro/onboarding">
                            Entrar
                        </LoginButton>
                    )}
                </HeaderActions>
            </Content>
        </HeaderContainer>
    );
};
