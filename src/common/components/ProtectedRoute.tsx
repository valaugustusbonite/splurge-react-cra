import { useAppSelector } from "common/custom_hooks/use_app_selector"
import { LoginScreen } from "features/login";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export interface ProtectedRouteProps {
  children: ReactElement<any, any> | null
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const data = useAppSelector((state) => state.authReducer.data);

  if (data === undefined || data === null) {
    return <LoginScreen />
  }

  return children
}