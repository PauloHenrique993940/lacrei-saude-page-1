'use client';

import styled from 'styled-components';

interface Option {
    label: string;
    value: string;
}

interface RadioGroupProps {
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
    name: string;
}

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 400px;
`;

const Label = styled.label<{ $selected: boolean }>`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme?.spacing?.md || '1rem'};
    cursor: pointer;
    font-size: 1.125rem;
    color: ${(props) => props.theme?.colors?.text?.default || '#485467'};
    padding: ${(props) => props.theme?.spacing?.sm || '0.5rem'} 0;
    transition: all 0.2s;

    &:hover {
        color: ${(props) => props.theme?.colors?.primary || '#018762'};
    }
`;

const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
`;

const CustomRadio = styled.div<{ $selected: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid
        ${(props) =>
            props.$selected
                ? props.theme?.colors?.primary
                : props.theme?.colors?.border || '#D5DBE3'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.2s;
    background-color: ${(props) => props.theme?.colors?.white};

    ${Label}:hover & {
        border-color: ${(props) => props.theme?.colors?.primary};
    }

    &::after {
        content: '';
        display: ${(props) => (props.$selected ? 'block' : 'none')};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${(props) => props.theme?.colors?.primary};
    }

    ${HiddenInput}:focus-visible + & {
        outline: 2px solid ${(props) => props.theme?.colors?.primary};
        outline-offset: 2px;
    }
`;

export const RadioGroup = ({
    options,
    selectedValue,
    onChange,
    name,
}: RadioGroupProps) => {
    return (
        <Group>
            {options.map((option) => {
                const isSelected = selectedValue === option.value;
                return (
                    <Label key={option.value} $selected={isSelected}>
                        <HiddenInput
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={isSelected}
                            onChange={() => onChange(option.value)}
                        />
                        <CustomRadio $selected={isSelected} />
                        {option.label}
                    </Label>
                );
            })}
        </Group>
    );
};
