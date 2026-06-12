'use client';

import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import Image from 'next/image';
import Link from 'next/link';
import FundoLacrei from '../assets/fundolacrei.png';
import PacienteImage from '../assets/paciente.png';
import ProfissionalImage from '../assets/profissiona.png';
import ImageProfissional from '../assets/ImageProfissional.png';
import ImagePaciente from '../assets/iagePaciente.png';

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
    gap: 2.4rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const TextBlock = styled.div`
    h1,
    h2 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        font-size: 1.3rem;
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
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
`;

const CTA = styled.div`
    background-color: #ffffff;
    padding: 3rem;
    border-radius: 24px;
    text-align: center;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);

    h2 {
        font-size: 2.3rem;
        color: ${(props) => props.theme.colors.secondary};
    }

    p {
        margin-top: 0.7rem;
        color: ${(props) => props.theme.colors.text};
        font-size: 1.25rem;
    }
`;

const GallerySection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const GalleryItem = styled.div`
    position: relative;
    width: 100%;
    height: 260px;
    border-radius: 16px;
    overflow: hidden;
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
                            src={FundoLacrei}
                            alt="Pessoas em ambiente acolhedor da Lacrei Saúde"
                            fill
                            unoptimized
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

                <GallerySection>
                    <GalleryItem>
                        <Image
                            src={PacienteImage}
                            alt="Paciente em atendimento de saúde"
                            fill
                            unoptimized
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </GalleryItem>
                    <GalleryItem>
                        <Image
                            src={ProfissionalImage}
                            alt="Profissional de saúde da comunidade Lacrei"
                            fill
                            unoptimized
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </GalleryItem>
                    <GalleryItem>
                        <Image
                            src={ImageProfissional}
                            alt="Equipe profissional de atendimento inclusivo"
                            fill
                            unoptimized
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </GalleryItem>
                    <GalleryItem>
                        <Image
                            src={ImagePaciente}
                            alt="Paciente recebendo cuidado com acolhimento"
                            fill
                            unoptimized
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </GalleryItem>
                </GallerySection>
            </Content>
            <Footer />
        </Main>
    );
}
