'use client';

import styled from 'styled-components';

interface ButtonProps {
    $variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = styled.button<ButtonProps>`
    padding: 0.75rem 2rem;
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
            primary: '#FF4D8D',
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
          border: 2px solid ${colors.primary};
          &:hover { 
            background-color: ${colors.primary};
            color: ${colors.white};
          }
        `;
            default:
                return `
          background-color: ${colors.primary};
          color: ${colors.white};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          &:hover { opacity: 0.9; }
        `;
        }
    }}

    &:focus {
        outline: 3px solid
            ${(props) => props.theme?.colors?.primary || '#FF4D8D'};
        outline-offset: 2px;
    }
`;
