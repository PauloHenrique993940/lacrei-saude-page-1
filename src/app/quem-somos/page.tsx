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
import PropositoImage from '../assets/roposito.png';
import MissaoImage from '../assets/missao.webp';
import AboutImage from '../assets/about.webp';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ffffff;
`;

const HeroSection = styled.section`
    width: min(100%, 1520px);
    margin: 4rem auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(420px, 492px);
    align-items: center;
    column-gap: 7rem;
    padding: 0 4.5rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        padding: 0 1rem;
        row-gap: 2rem;
        margin: 2rem auto;
    }
`;

const HeroText = styled.div`
    width: 100%;
    max-width: 42rem;

    h1 {
        max-width: 34rem;
        font-size: 3.75rem;
        line-height: 1.15;
        color: #1b2128;
        font-weight: 700;
        margin-bottom: 2.5rem;
        position: relative;
        display: block;

        &::after {
            content: '';
            display: block;
            width: 160px;
            height: 2px;
            background-color: #018762;
            margin-top: 1rem;
        }
    }
    p {
        font-size: 1.5rem;
        line-height: 1.6;
        color: #1b2128;
        margin-bottom: 2rem;
        font-weight: 400;
        max-width: 34rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        max-width: none;

        h1 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            max-width: none;
        }

        p {
            font-size: 1.25rem;
            max-width: none;
        }
    }
`;

const HeroImageWrapper = styled.div`
    width: 100%;
    max-width: 492px;
    position: relative;
    justify-self: end;
    height: 512px;
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
        max-width: none;
        height: 300px;
        justify-self: stretch;
    }
`;

const MissionSection = styled.section`
    background: #ffffff;
    padding: 6rem 2rem;
`;

const MissionContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 2.25rem;
        color: #1f2d44;
        margin-bottom: 0.5rem;
        font-weight: 700;
        font-family: 'Checkbook', sans-serif;
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            display: block;
            width: 160px;
            height: 2px;
            background-color: #018762;
            margin: 0.5rem auto 0;
        }
    }
    .subtitle {
        font-size: 1.125rem;
        color: #1f2d44;
        margin-bottom: 3rem;
        font-weight: 400;
    }
`;

const MissionGrid = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 0;
    align-items: center;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const MissionImageWrapper = styled.div`
    position: relative;
    height: 480px;
    border-radius: 16px;
    overflow: hidden;
    margin-right: -2rem;
    z-index: 1;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        height: 300px;
        margin-right: 0;
    }
`;

const MissionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    z-index: 2;
    position: relative;
`;

const MissionItem = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
    background: #ffffff;
    padding: 1.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

    .icon-box {
        width: 48px;
        height: 48px;
        border: 2px solid #015786;
        color: #015786;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    div {
        h3 {
            font-size: 1.25rem;
            color: #018762;
            margin-bottom: 0.25rem;
            font-weight: 700;
        }
        p {
            font-size: 1rem;
            color: #1f2d44;
            line-height: 1.4;
        }
    }
`;

const PurposeSection = styled.section`
    max-width: 1216px;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        padding: 0 1rem;
        gap: 2rem;
        margin: 4rem auto;
    }
`;

const PurposeText = styled.div`
    flex: 1;
    h2 {
        font-size: 2.25rem;
        color: #1f2d44;
        margin-bottom: 2rem;
        font-weight: 700;
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            display: block;
            width: 160px;
            height: 2px;
            background-color: #018762;
            margin-top: 0.5rem;
        }
    }
    p {
        font-size: 1.5rem;
        line-height: 1.6;
        color: #1b2128;
        margin-top: 1.5rem;
        font-weight: 400;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        p {
            font-size: 1.25rem;
        }
    }
`;

const PurposeImageWrapper = styled.div`
    flex: 1;
    position: relative;
    height: 480px;
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
        height: 300px;
    }
`;

const DetailSection = styled.section`
    max-width: 1216px;
    margin: 6rem auto;
    padding: 0 2rem;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        color: #1f2d44;
        margin-bottom: 4rem;
        font-weight: 700;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            display: block;
            width: 160px;
            height: 2px;
            background-color: #018762;
            margin: 0.5rem auto 0;
        }
    }
`;

const DetailGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const DetailCard = styled.div`
    background: #f8f6ff;
    padding: 2.5rem 1.5rem;
    border-radius: 8px;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon-box {
        width: 80px;
        height: 80px;
        background: transparent;
        border: 2.5px solid #015786;
        color: #015786;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        svg {
            width: 40px;
            height: 40px;
        }
    }

    h3 {
        font-size: 1.5rem;
        color: #015786;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    p {
        font-size: 1rem;
        color: #1f2d44;
        margin-bottom: 2rem;
        flex-grow: 1;
        line-height: 1.4;
        max-width: 280px;
    }

    a {
        width: auto;
        text-decoration: none;
    }
`;

const StyledButton = styled(Button)`
    width: 180px;
    padding: 0.75rem;
    font-size: 1.125rem;
    border-radius: 8px;
    background-color: #018762;
    color: white;
    border: none;
    box-shadow: 0 4px 10px rgba(1, 135, 98, 0.2);

    &:hover {
        background-color: #01664d;
    }
`;

/** Screen: 3I / Quem somos */
export default function QuemSomos() {
    return (
        <Main>
            <Header />

            <HeroSection>
                <HeroText>
                    <h1>Atendimento qualificado, seguro e inclusivo</h1>
                    <p>
                        Acreditamos que, ao possibilitar a inclusão clínica da
                        nossa comunidade, transformamos o mundo.
                    </p>
                    <p>
                        Foi pensando nisso, que a Lacrei Saúde nasceu em 2020
                        com o propósito de oferecer a melhor experiência no
                        acesso à profissionais da saúde para as pessoas
                        LGBTQIAPN+.
                    </p>
                    <p>
                        Atuamos de forma ética e embasada nas regras e
                        diretrizes estabelecidas pelos órgãos de classe e
                        regulamentadores.
                    </p>
                </HeroText>
                <HeroImageWrapper>
                    <Image
                        src={AboutImage}
                        alt="Impacto visual da Lacrei"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImageWrapper>
            </HeroSection>

            <MissionSection id="missao-visao-valores">
                <MissionContainer>
                    <h2>Missão, visão e valores da Lacrei Saúde</h2>
                    <p className="subtitle">O que nos motiva</p>

                    <MissionGrid>
                        <MissionImageWrapper>
                            <Image
                                src={MissaoImage}
                                alt="Pessoa com bandeira LGBTQIAPN+"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </MissionImageWrapper>

                        <MissionList>
                            <MissionItem>
                                <div className="icon-box">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="4" />
                                        <path d="M12 2v2" />
                                        <path d="M12 20v2" />
                                        <path d="m4.93 4.93 1.41 1.41" />
                                        <path d="m17.66 17.66 1.41 1.41" />
                                        <path d="M2 12h2" />
                                        <path d="M20 12h2" />
                                        <path d="m6.34 17.66-1.41 1.41" />
                                        <path d="m19.07 4.93-1.41 1.41" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Missão</h3>
                                    <p>
                                        Proporcionar a inclusão da comunidade ao
                                        atendimento clínico.
                                    </p>
                                </div>
                            </MissionItem>

                            <MissionItem>
                                <div className="icon-box">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Visão</h3>
                                    <p>
                                        Ser a plataforma de serviços de saúde da
                                        comunidade LGBTQIAPN+ no Brasil.
                                    </p>
                                </div>
                            </MissionItem>

                            <MissionItem>
                                <div className="icon-box">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 10v12" />
                                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3>Valores</h3>
                                    <p>
                                        Representatividade, segurança e
                                        acessibilidade da comunidade LGBTQIAPN+.
                                    </p>
                                </div>
                            </MissionItem>
                        </MissionList>
                    </MissionGrid>
                </MissionContainer>
            </MissionSection>

            <PurposeSection id="proposito">
                <PurposeText>
                    <h2>Nosso propósito</h2>
                    <p>
                        A Lacrei Saúde facilita a conexão entre pessoas da
                        comunidade LGBTQIAPN+ que precisam de atendimento
                        clínico a profissionais da saúde.
                    </p>
                    <p>
                        Buscamos proporcionar um atendimento de qualidade,
                        sustentado pelos pilares da inclusão, representatividade
                        e segurança.
                    </p>
                </PurposeText>
                <PurposeImageWrapper>
                    <Image
                        src={PropositoImage}
                        alt="Consultório com bandeira LGBTQIAPN+"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </PurposeImageWrapper>
            </PurposeSection>

            <DetailSection>
                <h2>Estamos atentos a cada detalhe da sua experiência</h2>
                <DetailGrid>
                    <DetailCard>
                        <div className="icon-box">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <h3>Segurança</h3>
                        <p>
                            Entenda como validamos pacientes e profissionais da
                            saúde.
                        </p>
                        <Link href="/seguranca">
                            <StyledButton>Entenda</StyledButton>
                        </Link>
                    </DetailCard>

                    <DetailCard>
                        <div className="icon-box">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10 8H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
                                <path d="M12 12V3" />
                                <path d="m9 6 3-3 3 3" />
                                <path d="M16 12h5" />
                                <path d="m18 9 3 3-3 3" />
                            </svg>
                        </div>
                        <h3>Acessibilidade</h3>
                        <p>
                            Conheça nossos recursos que tornam a plataforma
                            Lacrei Saúde acessível.
                        </p>
                        <Link href="/acessibilidade">
                            <StyledButton>Conheça</StyledButton>
                        </Link>
                    </DetailCard>

                    <DetailCard>
                        <div className="icon-box">
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                        </div>
                        <h3>Dúvidas Frequentes</h3>
                        <p>
                            Acesse nossa lista de perguntas frequentes e tire
                            suas dúvidas.
                        </p>
                        <Link href="/ajuda">
                            <StyledButton>Acesse</StyledButton>
                        </Link>
                    </DetailCard>
                </DetailGrid>
            </DetailSection>

            <Footer />
        </Main>
    );
}
