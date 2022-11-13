import { createContext, FC, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import { AuthContext } from './auth-context';

interface AuthProviderProps {
  children: any;
}

const fakeAuth = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const [token, setToken] = useState<string | undefined>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    const origin = location.state?.from?.pathname || NavigationRoutes.WebCreation.path;
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
