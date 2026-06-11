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
    gap: 1rem;
    cursor: pointer;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.secondary};
    padding: 0.5rem 0;

    &:hover {
        opacity: 0.8;
    }
`;

const HiddenInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const CustomRadio = styled.div<{ $selected: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid
        ${(props) => (props.$selected ? props.theme.colors.primary : '#BBBBBB')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        display: ${(props) => (props.$selected ? 'block' : 'none')};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.primary};
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
