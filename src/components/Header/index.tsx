'use client';

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../providers/AuthContext';
import LogoSVG from '../../app/assets/logo.svg';

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 0.75rem 0;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        padding: 0 1rem;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        display: none;
    }
`;

const StyledLink = styled(Link)`
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    &:focus-visible {
        outline: 2px solid ${(props) => props.theme?.colors?.primary};
        outline-offset: 2px;
    }
`;

const ActiveLink = styled(StyledLink)`
    text-decoration: none;
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    position: relative;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        gap: 1rem;
    }
`;

const MobileActions = styled.div`
    display: none;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        display: flex;
    }
`;

const MobileIconLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme?.colors?.primary || '#018762'};
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
        background: rgba(1, 135, 98, 0.05);
    }
`;

const MobileUserButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${(props) => props.theme?.colors?.primary || '#018762'};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.theme?.colors?.hover?.primary || '#01664D'};
    }
`;

const DropdownWrapper = styled.div`
    position: relative;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        display: none;
    }
`;

const LoginButton = styled.button<{ $isActive?: boolean }>`
    background-color: ${(props) =>
        props.$isActive
            ? '#014d3a'
            : props.theme?.colors?.primary || '#018762'};
    color: ${(props) => props.theme?.colors?.white || '#FFFFFF'};
    padding: 0.625rem 2rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.125rem;
    border: 2px solid ${(props) => props.theme?.colors?.primary || '#018762'};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.2s;

    &:hover {
        background-color: #01664d;
    }

    svg {
        transition: transform 0.2s;
        transform: ${(props) =>
            props.$isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    min-width: 240px;
    overflow: hidden;
    z-index: 110;
    border: 1px solid #e2e8f0;
`;

const DropdownItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 1.5rem;
    color: #000000;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.125rem;
    transition: background 0.2s;

    &:hover {
        background: #f7fafc;
    }

    svg {
        color: #000000;
    }
`;

const Divider = styled.div`
    height: 1px;
    background: #e2e8f0;
    margin: 0 1rem;
`;

const LogoutButton = styled.button`
    background: none;
    border: none;
    color: #e53e3e;
    font-weight: 700;
    padding: 1rem 1.5rem;
    width: 100%;
    text-align: left;
    cursor: pointer;
    &:hover {
        background: #fff5f5;
    }
`;

export const Header = memo(() => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();
    const isCadastro = pathname.includes('/cadastro');
    const { isAuthenticated, user, logout } = useAuth();

    const NavLink = ({
        href,
        children,
        'aria-label': ariaLabel,
    }: {
        href: string;
        children: React.ReactNode;
        'aria-label'?: string;
    }) => {
        const isActive = pathname === href;

        return isActive ? (
            <ActiveLink href={href} aria-label={ariaLabel}>
                {children}
            </ActiveLink>
        ) : (
            <StyledLink href={href} aria-label={ariaLabel}>
                {children}
            </StyledLink>
        );
    };

    return (
        <HeaderContainer role="banner">
            <Content>
                <Link href="/" aria-label="Lacrei Saúde Home">
                    <Image
                        src={LogoSVG}
                        alt="Lacrei Saúde"
                        width={187}
                        height={24}
                        priority
                    />
                </Link>
                <HeaderActions>
                    <Nav role="navigation">
                        {!isCadastro && (
                            <NavLink
                                href="/quem-somos"
                                aria-label="Ir para a página de quem somos"
                            >
                                Quem Somos
                            </NavLink>
                        )}
                        <NavLink
                            href="/ajuda"
                            aria-label="Ir para a página de ajuda"
                        >
                            Ajuda
                        </NavLink>
                    </Nav>

                    <MobileActions>
                        <MobileIconLink href="/ajuda" aria-label="Ajuda">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </MobileIconLink>
                        <MobileUserButton
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            aria-label="Entrar"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </MobileUserButton>
                    </MobileActions>

                    {!isCadastro && (
                        <>
                            <DropdownWrapper>
                                <LoginButton
                                    onClick={() =>
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }
                                    $isActive={isDropdownOpen}
                                    aria-expanded={isDropdownOpen}
                                    aria-haspopup="true"
                                    aria-label="Entrar - abrir menu de opções"
                                >
                                    Entrar
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L6 6L11 1"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </LoginButton>
                            </DropdownWrapper>

                            {isDropdownOpen && (
                                <DropdownMenu>
                                    <DropdownItem
                                        href="/entrar"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        Paciente
                                    </DropdownItem>
                                    <Divider />
                                    <DropdownItem
                                        href="/profissional"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="2"
                                                y="7"
                                                width="20"
                                                height="14"
                                                rx="2"
                                                ry="2"
                                            />
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        </svg>
                                        Profissional
                                    </DropdownItem>
                                    {isAuthenticated && (
                                        <>
                                            <Divider />
                                            <LogoutButton
                                                onClick={() => {
                                                    logout();
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                Sair (
                                                {user?.email?.split('@')[0]})
                                            </LogoutButton>
                                        </>
                                    )}
                                </DropdownMenu>
                            )}
                        </>
                    )}
                </HeaderActions>
            </Content>
        </HeaderContainer>
    );
});

Header.displayName = 'Header';
