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
        bottom: 12px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${(props) =>
            props.theme?.colors?.border || '#D5DBE3'};
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
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: ${(props) =>
            props.$active
                ? props.theme?.colors?.primary
                : props.theme?.colors?.text?.helper || '#717D96'};
        font-weight: ${(props) => (props.$active ? '700' : '400')};
        text-align: center;
    }
`;

const Circle = styled.div<{ $active: boolean; $completed: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.$active || props.$completed
            ? props.theme?.colors?.primary
            : props.theme?.colors?.white || '#FFFFFF'};
    border: 2px solid
        ${(props) =>
            props.$active || props.$completed
                ? props.theme?.colors?.primary
                : props.theme?.colors?.border || '#D5DBE3'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: default;

    &::after {
        content: '';
        display: ${(props) => (props.$active ? 'block' : 'none')};
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${(props) => props.theme?.colors?.white};
    }
`;

export const Stepper = ({ currentStep, steps }: StepperProps) => {
    const currentLabel = steps[currentStep - 1];

    return (
        <Container
            aria-label="Progresso do cadastro"
            aria-valuemax={steps.length}
            aria-valuemin={1}
            aria-valuenow={currentStep}
            aria-valuetext={
                currentLabel
                    ? `Etapa ${currentStep} de ${steps.length}: ${currentLabel}`
                    : `Etapa ${currentStep} de ${steps.length}`
            }
            role="progressbar"
        >
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
                            aria-current={isActive ? 'step' : undefined}
                        >
                            <span>{step}</span>
                            <Circle
                                $active={isActive}
                                $completed={isCompleted}
                            />
                        </StepItem>
                    );
                })}
            </StepWrapper>
        </Container>
    );
};
