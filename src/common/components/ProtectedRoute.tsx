import { useAppSelector } from "common/custom_hooks/use_app_selector"
import { AuthStateStatus, LoginScreen } from "features/login";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { SplashScreen } from "./SplashScreen";

export interface ProtectedRouteProps {
  children: ReactElement<any, any> | null
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data } = useAppSelector((state) => state.authReducer);
  const { status } = useAppSelector((state) => state.authReducer);

  if (status === AuthStateStatus.loading || status === AuthStateStatus.idle)  {
    return <SplashScreen />
  }

  if (data === null && status === AuthStateStatus.success) {
    return <LoginScreen />
  }

  return children
}