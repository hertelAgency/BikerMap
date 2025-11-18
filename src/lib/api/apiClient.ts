import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

// API Client Konfiguration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001/api';
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 10000;

// Axios Instanz erstellen
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Token aus localStorage holen und zum Header hinzufügen
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Request-Logging (nur in Development)
    if (import.meta.env.DEV) {
      console.log('API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Response-Logging (nur in Development)
    if (import.meta.env.DEV) {
      console.log('API Response:', {
        status: response.status,
        data: response.data,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    // Error-Handling
    if (error.response) {
      // Server hat mit Fehlercode geantwortet
      const status = error.response.status;

      switch (status) {
        case 401:
          // Unauthorized - Token abgelaufen oder ungültig
          console.error('Unauthorized - Bitte erneut anmelden');
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          break;

        case 403:
          // Forbidden - Keine Berechtigung
          console.error('Forbidden - Keine Berechtigung für diese Aktion');
          break;

        case 404:
          // Not Found
          console.error('Resource nicht gefunden');
          break;

        case 500:
        case 502:
        case 503:
          // Server Error
          console.error('Server-Fehler - Bitte später erneut versuchen');
          break;

        default:
          console.error('API Error:', error.response.data);
      }
    } else if (error.request) {
      // Request wurde gesendet, aber keine Response erhalten
      console.error('Keine Antwort vom Server - Bitte Internetverbindung prüfen');
    } else {
      // Fehler beim Setup des Requests
      console.error('Request-Fehler:', error.message);
    }

    return Promise.reject(error);
  }
);

// Helper-Funktionen für API-Calls
export const api = {
  // GET Request
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.get<T>(url, config);
  },

  // POST Request
  post: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return apiClient.post<T>(url, data, config);
  },

  // PUT Request
  put: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return apiClient.put<T>(url, data, config);
  },

  // PATCH Request
  patch: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return apiClient.patch<T>(url, data, config);
  },

  // DELETE Request
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.delete<T>(url, config);
  },
};

export default apiClient;
