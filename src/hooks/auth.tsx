import React, {
  createContext, useCallback, useState, useContext,
} from 'react';

import UserInterface from 'models/User';
import api from 'services/api';

interface AuthContextData {
  user: UserInterface;
  senha?: string;
  signIn(loginInfo: Login): Promise<void>;
  signOut(): void;
  updateUser(user: UserInterface): void;
}

interface Login {
  email: string;
  password: string;
}

interface UserLoginData {
  user: UserInterface;
}

interface LoginRequestData {
  user: UserInterface;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserLoginData>(() => {
    const token = localStorage.getItem('@Kabum:token');
    const user = localStorage.getItem('@Kabum:user');

    if (user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as UserLoginData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<LoginRequestData[]>(
      `${process.env.REACT_APP_DEV_API_URL}/signin`,
      {
        email,
        password,
      },
    );

    const [user] = response.data;

    if (user !== undefined) {
      localStorage.setItem('@Kabum:user', JSON.stringify(user));
    }

    setData(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Kabum:token');
    localStorage.removeItem('@Kabum:user');

    setData({} as UserLoginData);
  }, []);

  const updateUser = useCallback(
    (user: UserInterface) => {
      localStorage.setItem('@Kabum:user', JSON.stringify(user));

      setData({
        user,
      });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut, updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
