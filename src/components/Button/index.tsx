'use client';

import styled from 'styled-components';

interface ButtonProps {
    $variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = styled.button<ButtonProps>`
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;

    ${(props) => {
        const colors = props.theme?.colors || {
            white: '#FFFFFF',
            primary: '#018762',
        };
        switch (props.$variant) {
            case 'secondary':
                return `
          background-color: ${colors.white};
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          &:hover { opacity: 0.8; }
        `;
            case 'outline':
                return `
          background-color: transparent;
          color: ${colors.primary};
                    border: 1px solid ${colors.primary};
          &:hover { 
            background-color: ${colors.primary};
            color: ${colors.white};
          }
        `;
            default:
                return `
          background-color: ${colors.primary};
          color: ${colors.white};
                    box-shadow: 0px 4px 12px rgba(1, 135, 98, 0.24);
                    border: 1px solid ${colors.primary};
          &:hover { opacity: 0.9; }
        `;
        }
    }}

    &:focus {
        outline: 3px solid
            ${(props) => props.theme?.colors?.primary || '#018762'};
        outline-offset: 2px;
    }
`;
