'use client';

import styled from 'styled-components';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import ImageHome from '@/app/assets/lacrei2.png';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.section`
    flex: 1;
    position: relative;
    padding: 2rem 4rem;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 600px;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        padding: 2rem 1.5rem;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const HeroText = styled.div`
    z-index: 1;
    max-width: 600px;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
        color: ${(props) => props.theme.colors.text};
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 1;
    pointer-events: none;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.7) 10%,
            rgba(255, 255, 255, 0) 60%
        );
    }

    img {
        filter: saturate(1.4) contrast(1.1);
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        opacity: 0.8;
        &::after {
            background: rgba(255, 255, 255, 0.6);
        }
    }
`;

/** Screen: 1I / Início */
export default function Home() {
    return (
        <Main>
            <Header />
            <Content>
                <ImageContainer>
                    <Image
                        src={ImageHome}
                        alt="Background Lacrei"
                        fill
                        unoptimized
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </ImageContainer>
                <HeroText>
                    <h1>Olá, você está na Lacrei Saúde!</h1>
                    <p>
                        Conectamos pessoas LGBTQIAPN+ com profissionais de saúde
                        qualificados, proporcionando experiências de cuidado
                        seguras e inclusivas.
                    </p>
                    <ButtonGroup>
                        <Link href="/cadastro/onboarding">
                            <Button>Para pacientes</Button>
                        </Link>
                        <Link href="/profissional">
                            <Button $variant="outline">
                                Para profissionais
                            </Button>
                        </Link>
                    </ButtonGroup>
                </HeroText>
            </Content>
            <Footer />
        </Main>
    );
}
