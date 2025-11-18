import { AxiosResponse } from 'axios';
import { api } from '../api/apiClient';

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

const register = (
  username: string,
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>('/AuthManagement/Register', {
    username,
    email,
    password,
  });
};

const login = (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>('/AuthManagement/Login', {
    email,
    password,
  });
};

const logout = (): void => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

const getCurrentUser = (): AuthResponse['user'] | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
