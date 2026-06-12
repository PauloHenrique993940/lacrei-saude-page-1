'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from '../../app/assets/logo.svg';

interface LogoProps {
    variant?: 'horizontal' | 'stacked';
    showText?: boolean;
}

const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const Logo = ({
    variant = 'horizontal',
    showText = true,
}: LogoProps) => {
    return (
        <LogoContainer
            href="/"
            aria-label="Logo da Lacrei Saúde que redireciona para a página principal"
        >
            <Image
                src={LogoSVG}
                alt="Logo da Lacrei Saúde"
                width={200}
                height={26}
                priority
            />
        </LogoContainer>
    );
};
