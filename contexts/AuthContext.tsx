import React, { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  username: string;
};

type AuthContextType = {
  user: User | null
  login: (userData: User) => void;
  logout: () => void
  isAuthenticated: boolean; 
};

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
  children: JSX.Element|JSX.Element[]
};




export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);



  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}



export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }

  return context;
};
