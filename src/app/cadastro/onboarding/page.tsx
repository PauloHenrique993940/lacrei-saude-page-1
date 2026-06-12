'use client';

import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import Image from 'next/image';
import MedicoCuidandoPaciente from '../../assets/medicoCuidandoPaciente.png';
import Link from 'next/link';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    gap: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 2rem 1.5rem;
        text-align: center;
    }
`;

const FormSection = styled.div`
    h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: ${(props) => props.theme?.spacing?.xl || '2rem'};
        color: ${(props) => props.theme?.colors?.text?.title || '#1F2937'};
    }

    p {
        font-size: 1.5rem;
        line-height: 1.5;
        margin-bottom: ${(props) => props.theme?.spacing?.['2xl'] || '3rem'};
        color: ${(props) => props.theme?.colors?.text?.default || '#485467'};
    }
`;

const IllustrationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 400px;

    @media (max-width: ${(props) =>
            props.theme?.breakpoints?.tablet || '768px'}) {
        order: -1;
        margin-bottom: 2rem;
        height: 300px;
    }
`;

export default function Onboarding() {
    return (
        <Main>
            <Header />
            <Content>
                <FormSection>
                    <h1>Boas-vindas à Lacrei Saúde, continue o seu cadastro</h1>
                    <p>
                        Para personalizar sua experiência aqui na Lacrei Saúde,
                        faremos algumas perguntas rápidas antes de concluir o
                        seu cadastro.
                    </p>
                    <Link href="/cadastro/pronome">
                        <Button>Continuar cadastro</Button>
                    </Link>
                </FormSection>
                <IllustrationWrapper>
                    <Image
                        src={MedicoCuidandoPaciente}
                        alt="Ilustração Lacrei Saúde"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </IllustrationWrapper>
            </Content>
            <Footer />
        </Main>
    );
}
