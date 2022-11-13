import { createContext, useContext } from 'react';

interface AuthProviderProps {
  token: string | undefined;
  onLogin: (username: string, password: string) => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthProviderProps | undefined>(undefined);
export const useAuth = () => {
  return useContext(AuthContext);
};
