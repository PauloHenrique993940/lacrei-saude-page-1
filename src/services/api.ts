/**
 * Mock API Service
 * Simula a integração com um backend para demonstração de domínio de dados.
 */

export interface UserData {
    pronoun?: string;
    ethnicity?: string;
    gender?: string;
    sexuality?: string;
    disability?: string;
}

export const saveUserOnboarding = async (data: UserData): Promise<{ success: boolean }> => {
    // Simula latência de rede
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log('Dados salvos via Mock API:', data);
    
    // Simula sucesso
    return { success: true };
};
