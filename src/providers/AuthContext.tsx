'use client';

import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface AuthUser {
    email: string;
    name: string;
}

interface AuthAccount extends AuthUser {
    password: string;
}

type PasswordResetResult = 'sent' | 'not_found';

interface AuthContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isReady: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    requestPasswordReset: (email: string) => Promise<PasswordResetResult>;
    logout: () => void;
    register: (
        name: string,
        email: string,
        password: string
    ) => Promise<boolean>;
}

const STORAGE_KEY = 'lacrei-auth-user';
const ACCOUNTS_STORAGE_KEY = 'lacrei-auth-accounts';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function normalizeEmail(email: string) {
    return email.trim().toLowerCase();
}

function getStoredAccounts(): AuthAccount[] {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);

    if (!raw) {
        return [];
    }

    try {
        const parsed = JSON.parse(raw) as AuthAccount[];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        localStorage.removeItem(ACCOUNTS_STORAGE_KEY);
        return [];
    }
}

function saveStoredAccounts(accounts: AuthAccount[]) {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            setIsReady(true);
            return;
        }

        try {
            const parsed = JSON.parse(raw) as AuthUser;
            if (parsed?.email) {
                setUser(parsed);
            }
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        } finally {
            setIsReady(true);
        }
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        if (!email || !password) {
            return false;
        }

        const normalizedEmail = normalizeEmail(email);
        const account = getStoredAccounts().find(
            (storedAccount) =>
                storedAccount.email === normalizedEmail &&
                storedAccount.password === password
        );

        if (!account) {
            return false;
        }

        const nextUser: AuthUser = {
            email: account.email,
            name: account.name,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
        setUser(nextUser);
        return true;
    };

    const register = async (
        name: string,
        email: string,
        password: string
    ): Promise<boolean> => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        if (!name || !email || !password) {
            return false;
        }

        const normalizedEmail = normalizeEmail(email);
        const accounts = getStoredAccounts().filter(
            (account) => account.email !== normalizedEmail
        );
        const nextAccount: AuthAccount = {
            name: name.trim(),
            email: normalizedEmail,
            password,
        };
        const nextUser: AuthUser = {
            name: nextAccount.name,
            email: nextAccount.email,
        };

        accounts.push(nextAccount);
        saveStoredAccounts(accounts);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
        setUser(nextUser);
        return true;
    };

    const requestPasswordReset = async (
        email: string
    ): Promise<PasswordResetResult> => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        const normalizedEmail = normalizeEmail(email);
        const accountExists = getStoredAccounts().some(
            (account) => account.email === normalizedEmail
        );

        return accountExists ? 'sent' : 'not_found';
    };

    const logout = () => {
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            isAuthenticated: Boolean(user),
            isReady,
            login,
            requestPasswordReset,
            logout,
            register,
        }),
        [user, isReady]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }

    return context;
}
