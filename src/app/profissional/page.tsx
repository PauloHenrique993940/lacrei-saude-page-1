'use client';

import styled from 'styled-components';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import profissionaisSaude from '@/app/assets/profissionaisSaude.avif';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    padding: 2rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;

    @media (max-width: ${(props) =>
            props.theme.breakpoints.tablet || '768px'}) {
        grid-template-columns: 1fr;
        padding: 2rem 1.5rem;
        gap: 2rem;
        text-align: center;
    }
`;

const TextBlock = styled.div`
    h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: ${(props) => props.theme?.colors?.secondary || '#2D2D2D'};
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
        color: ${(props) => props.theme?.colors?.text || '#515151'};
        line-height: 1.5;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        h1 {
            font-size: 2.25rem;
        }
        p {
            font-size: 1.25rem;
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        align-items: stretch;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 480px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        height: 320px;
        order: -1;
    }
`;

/** Screen: 2I / Escolha da pessoa */
export default function Profissional() {
    return (
        <Main>
            <Header />
            <Content>
                <TextBlock>
                    <h1>Junte-se à nossa comunidade</h1>
                    <p>
                        Encontre atendimento clínico de qualidade ou entre para
                        o time de profissionais da Lacrei Saúde.
                    </p>
                    <ButtonGroup>
                        <Link href="/">
                            <Button>Buscar atendimento</Button>
                        </Link>
                        <Link href="/">
                            <Button $variant="outline">
                                Oferecer atendimento
                            </Button>
                        </Link>
                    </ButtonGroup>
                </TextBlock>
                <ImageContainer>
                    <Image
                        src={profissionaisSaude}
                        alt="Time de profissionais de saúde"
                        fill
                        unoptimized
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </ImageContainer>
            </Content>
            <Footer />
        </Main>
    );
}
