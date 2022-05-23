import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { authListener } from 'utils';

interface UserContextProps {
  children: React.ReactNode,
}

export const UserContext = createContext({
  currentUser: null,
  assignUser: (user: any) => {},
  accessToken: '',
  setToken: (token: string) => {},
});

export const UserProvider: React.FC<UserContextProps> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  const assignUser = (user: any) => {
    if (!user) return;

    setCurrentUser(user);
  }

  const setToken = (token: string) => {
    if (!token) return;

    setAccessToken(token);
  }

  const value = { 
    currentUser, 
    assignUser,
    accessToken,
    setToken
  };

  useEffect(() => {

    const listener = authListener((user) => {
      try {
        if (!user) return;
        
        assignUser(user);
      } catch (error) {
        
      }
    });

    return listener;
  }, []);

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}