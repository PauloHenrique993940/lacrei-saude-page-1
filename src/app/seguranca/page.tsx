'use client';

import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import FundoLacrei from '../assets/fundolacrei.png';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #ffffff;
`;

const HeroSection = styled.section`
    max-width: 1216px;
    margin: 4rem auto;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: column;
        padding: 0 1rem;
        gap: 2rem;
        margin: 2rem auto;
    }
`;

const HeroText = styled.div`
    flex: 1;
    h1 {
        font-size: 3rem;
        line-height: 1.2;
        color: #1f2d44;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    p {
        font-size: 1.15rem;
        line-height: 1.6;
        color: #5166b1;
        margin-bottom: 1.5rem;
    }
`;

const HeroImageWrapper = styled.div`
    flex: 1;
    position: relative;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
        height: 300px;
    }
`;

const PillarsSection = styled.section`
    background: #f8fafc;
    padding: 6rem 2rem;
`;

const PillarsContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        color: #1f2d44;
        margin-bottom: 4rem;
        font-weight: 700;
    }
`;

const PillarsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const PillarCard = styled.div`
    background: white;
    padding: 2.5rem;
    border-radius: 24px;
    text-align: left;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);

    .icon-box {
        width: 56px;
        height: 56px;
        background: #f1f5f9;
        color: #015786;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.5rem;
        color: #1f2d44;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    p {
        font-size: 1.1rem;
        color: #5166b1;
        line-height: 1.5;
    }

    ul {
        margin-top: 1rem;
        padding-left: 1.25rem;
        color: #5166b1;
        li {
            margin-bottom: 0.5rem;
        }
    }
`;

const DocumentsSection = styled.section`
    max-width: 1216px;
    margin: 6rem auto;
    padding: 0 2rem;
    text-align: center;

    h2 {
        font-size: 2rem;
        color: #1f2d44;
        margin-bottom: 3rem;
        font-weight: 700;
    }
`;

const DocGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

const DocLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 2px solid #f1f5f9;
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        border-color: #018762;
        background: #f8fafc;
        transform: translateY(-4px);
    }

    .icon {
        color: #018762;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1f2d44;
    }
`;

export default function Seguranca() {
    return (
        <Main>
            <Header />

            <HeroSection>
                <HeroText>
                    <h1>Segurança e Privacidade</h1>
                    <p>
                        Cuidar da sua saúde exige confiança. Por isso, adotamos
                        as melhores práticas de segurança para proteger seus
                        dados e garantir um ambiente acolhedor.
                    </p>
                    <p>
                        A Lacrei Saúde segue rigorosamente as diretrizes da LGPD
                        (Lei Geral de Proteção de Dados) e valida cuidadosamente
                        cada profissional da plataforma.
                    </p>
                </HeroText>
                <HeroImageWrapper>
                    <Image
                        src={FundoLacrei}
                        alt="Segurança de dados"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImageWrapper>
            </HeroSection>

            <PillarsSection>
                <PillarsContainer>
                    <h2>Nosso compromisso com você</h2>
                    <PillarsGrid>
                        <PillarCard>
                            <div className="icon-box">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                </svg>
                            </div>
                            <h3>Validação Profissional</h3>
                            <p>
                                Garantimos que você seja atendido por
                                profissionais reais e habilitados:
                            </p>
                            <ul>
                                <li>
                                    Conferência de registro profissional (CRM,
                                    CRP, etc.)
                                </li>
                                <li>
                                    Validação de identidade por reconhecimento
                                    facial
                                </li>
                                <li>Monitoramento constante de denúncias</li>
                            </ul>
                        </PillarCard>

                        <PillarCard>
                            <div className="icon-box">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="18"
                                        height="11"
                                        x="3"
                                        y="11"
                                        rx="2"
                                        ry="2"
                                    />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <h3>Privacidade de Dados</h3>
                            <p>
                                Seus dados são tratados com o máximo de sigilo:
                            </p>
                            <ul>
                                <li>Criptografia de ponta a ponta</li>
                                <li>Armazenamento seguro em nuvem</li>
                                <li>
                                    Acesso restrito apenas a informações
                                    necessárias
                                </li>
                            </ul>
                        </PillarCard>
                    </PillarsGrid>
                </PillarsContainer>
            </PillarsSection>

            <DocumentsSection>
                <h2>Documentos Legais</h2>
                <DocGrid>
                    <DocLink href="/politica-de-privacidade">
                        <div className="icon">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <span>Política de Privacidade</span>
                    </DocLink>

                    <DocLink href="/termos-de-uso">
                        <div className="icon">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                />
                                <path d="M7 8h10" />
                                <path x1="7" y1="12" x2="17" y2="12" />
                                <path x1="7" y1="16" x2="13" y2="16" />
                            </svg>
                        </div>
                        <span>Termos de Uso</span>
                    </DocLink>

                    <DocLink href="/direitos-de-titular">
                        <div className="icon">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <line x1="19" y1="8" x2="19" y2="14" />
                                <line x1="22" y1="11" x2="16" y2="11" />
                            </svg>
                        </div>
                        <span>Direitos do Titular</span>
                    </DocLink>
                </DocGrid>
            </DocumentsSection>

            <Footer />
        </Main>
    );
}
