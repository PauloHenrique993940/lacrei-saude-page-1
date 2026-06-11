'use client';

import styled from 'styled-components';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 1rem;
    }
`;

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const TextBlock = styled.div`
    h1,
    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        font-size: 1.125rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colors.text};
        line-height: 1.6;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
`;

const CTA = styled.div`
    background-color: #f8f9fa;
    padding: 3rem;
    border-radius: 24px;
    text-align: center;
`;

/** Screen: 3I / Quem somos */
export default function QuemSomos() {
    return (
        <Main>
            <Header />
            <Content>
                <Section>
                    <TextBlock>
                        <h1>Atendimento qualificado, seguro e inclusivo</h1>
                        <p>
                            Acreditamos que, ao possibilitar a inclusão clínica
                            da nossa comunidade, transformamos o mundo.
                        </p>
                        <p>
                            Foi pensando nisso, que a Lacrei Saúde nasceu em
                            2020 com o propósito de oferecer a melhor
                            experiência no acesso à profissionais da saúde para
                            as pessoas LGBTQIAPN+.
                        </p>
                        <p>
                            Atuamos de forma ética e embasada nas regras e
                            diretrizes estabelecidas pelos órgãos de classe e
                            regulamentadores.
                        </p>
                    </TextBlock>
                    <ImageWrapper>
                        <Image
                            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                            alt="Pessoa sorrindo e apontando para o rosto"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </ImageWrapper>
                </Section>

                <CTA>
                    <h2>Construindo o futuro do cuidado</h2>
                    <p>
                        Mais do que uma plataforma, somos um movimento de
                        acolhimento.
                    </p>
                </CTA>
            </Content>
            <Footer />
        </Main>
    );
}
