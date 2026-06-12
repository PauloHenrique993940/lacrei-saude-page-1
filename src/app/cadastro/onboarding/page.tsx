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
        font-size: 2.5rem;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: ${(props) => props.theme?.colors?.secondary || '#7B2CBF'};
    }

    p {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 3rem;
        color: ${(props) => props.theme?.colors?.text || '#515151'};
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
                        unoptimized
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </IllustrationWrapper>
            </Content>
            <Footer />
        </Main>
    );
}
