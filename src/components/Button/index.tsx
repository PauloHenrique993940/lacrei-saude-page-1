"use client";

import styled from "styled-components";

interface ButtonProps {
    $variant?: "primary" | "secondary" | "outline";
}

export const Button = styled.button<ButtonProps>`
  padding: 0.625rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.0625rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  min-height: 48px;
  cursor: pointer;
  border: 2px solid transparent;

  ${(props) => {
        const colors = props.theme?.colors || {
            white: "#FFFFFF",
            primary: "#018762",
            hover: {
                primary: "#01664D",
            },
            pressed: {
                primary: "#014D3A",
            },
            disabled: "#D1D5DB",
            text: {
                button: "#FFFFFF",
            },
        };

        switch (props.$variant) {
            case "secondary":
                return `
          background-color: ${colors.white};
          color: ${colors.primary};
          border-color: ${colors.primary};

          &:hover {
            background-color: ${colors.background};
          }

          &:active {
            background-color: ${colors.border};
          }
        `;

            case "outline":
                return `
          background-color: transparent;
          color: ${colors.primary};
          border-color: ${colors.primary};
          box-shadow: ${props.theme?.shadows?.sm || "0px 2px 4px rgba(0, 0, 0, 0.05)"
                    };

          &:hover {
            background-color: ${colors.primary};
            color: ${colors.white};
            box-shadow: ${props.theme?.shadows?.md || "0px 4px 12px rgba(1, 135, 98, 0.24)"
                    };
          }

          &:active {
            background-color: ${colors.hover?.primary};
          }
        `;

            default:
                return `
          background-color: ${colors.primary};
          color: ${colors.text?.button || colors.white};
          box-shadow: ${props.theme?.shadows?.md || "0px 4px 12px rgba(1, 135, 98, 0.24)"
                    };

          &:hover {
            background-color: ${colors.hover?.primary || "#01664D"};
            box-shadow: ${props.theme?.shadows?.lg || "0px 8px 24px rgba(0, 0, 0, 0.12)"
                    };
          }

        &:active {
            background-color: ${colors.pressed?.primary || "#014D3A"};
            box-shadow: ${props.theme?.shadows?.sm || "0px 2px 4px rgba(0, 0, 0, 0.05)"
                    };
            transform: translateY(1px);
          }
        `;
        }
    }}

  &:disabled {
    background-color: ${(props) => props.theme?.colors?.disabled};
    color: ${(props) => props.theme?.colors?.white};
    border-color: transparent;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: 3px solid ${(props) => props.theme?.colors?.primary || "#018762"};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
