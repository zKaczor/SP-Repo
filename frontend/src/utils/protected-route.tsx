import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { NavigationRoutes } from '../constants';
import { useAuth } from './auth-context';

interface ProtectedRouteProps {
  children: any;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.token) {
    return <Navigate to={NavigationRoutes.Login.path} replace state={{ from: location }} />;
  }

  return props.children;
};
