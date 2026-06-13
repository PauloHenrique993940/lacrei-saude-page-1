'use client';

import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Image from 'next/image';
import ProfissionaisSaude from '../assets/profissionaisSaude.avif';

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

const FormSection = styled.section`
    background: #f8fafc;
    padding: 6rem 2rem;
`;

const FormContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 3rem;
    border-radius: 24px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);

    h2 {
        font-size: 1.75rem;
        color: #1f2d44;
        margin-bottom: 2.5rem;
        font-weight: 700;
        text-align: center;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 1rem;
        font-weight: 600;
        color: #1f2d44;
    }

    input,
    select {
        padding: 0.8rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        color: #1f2d44;
        transition: border-color 0.2s;

        &:focus {
            outline: none;
            border-color: #018762;
        }

        &::placeholder {
            color: #94a3b8;
        }
    }
`;

const RequestGrid = styled.div`
    margin-top: 2rem;
    h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #1f2d44;
        margin-bottom: 1rem;
    }
`;

const RequestFieldset = styled.fieldset`
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
`;

const RequestLegend = styled.legend`
    font-size: 1.1rem;
    font-weight: 700;
    color: #1f2d44;
    margin-bottom: 1rem;
`;

const RadioGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
`;

const RadioItem = styled.label`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid #f1f5f9;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f8fafc;
        border-color: #018762;
    }

    input {
        accent-color: #018762;
    }

    span {
        font-size: 1rem;
        color: #1f2d44;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    margin-top: 2.5rem;
    background: #018762;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #015f45;
    }
`;

export default function DireitosTitular() {
    const requests = [
        'Confirmação da existência do tratamento',
        'Acesso aos dados',
        'Apagar a conta',
        'Correção de dados',
        'Tornar anônimo, bloquear ou eliminar dados desnecessários',
        'Portabilidade de dados',
        'Eliminação dos dados pessoais tratados com o consentimento da pessoa titular',
        'Informações sobre o compartilhamento de dados',
        'Anular o consentimento dos dados',
        'Outro direito',
    ];

    const requestOptions = requests.map((request) => ({
        id: `solicitacao-${request
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase()}`,
        label: request,
    }));

    return (
        <Main>
            <Header />

            <HeroSection>
                <HeroText>
                    <h1>Direitos de Titular</h1>
                    <p>
                        Os seus dados pertencem a você. Por isso, tratamos as
                        suas informações de acordo com a Lei Geral de Proteção
                        de Dados Pessoais (LGPD).
                    </p>
                    <p>
                        Aqui, você acessa seus dados quando quiser. Basta
                        solicitar que enviamos ou modificamos suas preferências
                        sem complicação.
                    </p>
                </HeroText>
                <HeroImageWrapper>
                    <Image
                        src={ProfissionaisSaude}
                        alt="Pessoa enrolada na bandeira LGBTQIAPN+"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImageWrapper>
            </HeroSection>

            <FormSection>
                <FormContainer>
                    <h2>Solicitação de direitos da pessoa titular</h2>
                    <form>
                        <FormGroup>
                            <label htmlFor="titular-nome">Nome</label>
                            <input
                                id="titular-nome"
                                type="text"
                                placeholder="Digite seu nome"
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="titular-email">E-mail</label>
                            <input
                                id="titular-email"
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="perfil">
                                Você é paciente ou profissional da saúde?
                            </label>
                            <select id="perfil" title="Selecione seu perfil">
                                <option value="">Selecione seu perfil</option>
                                <option value="paciente">Paciente</option>
                                <option value="profissional">
                                    Profissional da Saúde
                                </option>
                            </select>
                        </FormGroup>

                        <RequestGrid>
                            <RequestFieldset>
                                <RequestLegend>
                                    Selecione a solicitação desejada:
                                </RequestLegend>
                                <RadioGrid>
                                    {requestOptions.map((requestOption) => (
                                        <RadioItem
                                            key={requestOption.id}
                                            htmlFor={requestOption.id}
                                        >
                                            <input
                                                aria-label={requestOption.label}
                                                id={requestOption.id}
                                                type="radio"
                                                name="solicitacao"
                                                value={requestOption.label}
                                            />
                                            <span>{requestOption.label}</span>
                                        </RadioItem>
                                    ))}
                                </RadioGrid>
                            </RequestFieldset>
                        </RequestGrid>

                        <SubmitButton type="button">
                            Solicitar direitos da pessoa titular
                        </SubmitButton>
                    </form>
                </FormContainer>
            </FormSection>

            <Footer />
        </Main>
    );
}
