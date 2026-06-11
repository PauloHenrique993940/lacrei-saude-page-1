'use client';

import styled from 'styled-components';

interface StepperProps {
    currentStep: number;
    steps: string[];
}

const Container = styled.div`
    width: 100%;
    margin-bottom: 3rem;
`;

const StepWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #eeeeee;
        z-index: 1;
    }
`;

const StepItem = styled.div<{ $active: boolean; $completed: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    flex: 1;

    span {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        color: ${(props) =>
            props.$active ? props.theme.colors.primary : '#888888'};
        font-weight: ${(props) => (props.$active ? '700' : '400')};
    }
`;

const Circle = styled.div<{ $active: boolean; $completed: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.$active || props.$completed
            ? props.theme.colors.primary
            : '#FFFFFF'};
    border: 2px solid
        ${(props) =>
            props.$active || props.$completed
                ? props.theme.colors.primary
                : '#eeeeee'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
        props.$active || props.$completed ? '#FFFFFF' : '#888888'};
    font-weight: 700;
    font-size: 0.875rem;
    transition: all 0.2s;
`;

export const Stepper = ({ currentStep, steps }: StepperProps) => {
    return (
        <Container>
            <StepWrapper>
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <StepItem
                            key={step}
                            $active={isActive}
                            $completed={isCompleted}
                        >
                            <Circle $active={isActive} $completed={isCompleted}>
                                {stepNumber}
                            </Circle>
                            <span>{step}</span>
                        </StepItem>
                    );
                })}
            </StepWrapper>
        </Container>
    );
};
