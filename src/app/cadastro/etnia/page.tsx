'use client';

import React from 'react';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import { Stepper } from '../../../components/Stepper';
import { RadioGroup } from '../../../components/RadioGroup';
import Link from 'next/link';
import { useOnboarding } from '../../../providers/OnboardingContext';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 3rem 2rem;
`;

const Question = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.secondary};
`;

const Disclaimer = styled.p`
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '🔒';
    }
`;

const NavigationGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column-reverse;
        gap: 1rem;

        button {
            width: 100%;
        }
    }
`;

const STEPS = ['Pronome', 'Etnia', 'Gênero', 'Sexualidade', 'Deficiência'];

const ETHNICITY_OPTIONS = [
    { label: 'Amarela', value: 'amarela' },
    { label: 'Branca', value: 'branca' },
    { label: 'Indígena', value: 'indigena' },
    { label: 'Parda', value: 'parda' },
    { label: 'Preta', value: 'preta' },
    { label: 'Outra', value: 'outra' },
];

export default function Etnia() {
    const { userData, updateData } = useOnboarding();

    return (
        <Main>
            <Header />
            <Content>
                <Stepper currentStep={2} steps={STEPS} />

                <Question>Com qual etnia você se identifica?</Question>

                <RadioGroup
                    name="ethnicity"
                    options={ETHNICITY_OPTIONS}
                    selectedValue={userData.ethnicity || ''}
                    onChange={(val) => updateData({ ethnicity: val })}
                />

                <Disclaimer>
                    Os dados informados serão de conhecimento da pessoa
                    profissional de saúde.
                </Disclaimer>

                <NavigationGroup>
                    <Link href="/cadastro/pronome">
                        <Button $variant="outline" as="div">
                            Voltar
                        </Button>
                    </Link>
                    <Link href="/cadastro/genero">
                        <Button disabled={!userData.ethnicity}>Próximo</Button>
                    </Link>
                </NavigationGroup>
            </Content>
            <Footer />
        </Main>
    );
}
