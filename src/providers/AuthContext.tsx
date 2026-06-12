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

interface AuthContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isReady: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (
        name: string,
        email: string,
        password: string
    ) => Promise<boolean>;
}

const STORAGE_KEY = 'lacrei-auth-user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

        const nextUser: AuthUser = {
            email,
            name: email.split('@')[0] || 'Usuário',
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

        const nextUser: AuthUser = { name, email };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
        setUser(nextUser);
        return true;
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
