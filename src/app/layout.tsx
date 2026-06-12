import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Providers from '../providers';

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-nunito',
});

export const metadata: Metadata = {
    title: 'Lacrei Saúde',
    description:
        'Construa experiências digitais inclusivas, acessíveis e seguras.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={nunito.variable}>
            <body suppressHydrationWarning>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
