import axios, { AxiosResponse } from 'axios';
import { getStoredAuthToken, removeStoredAuthToken } from './authToken';
import { objectToQueryString } from './url';
import.meta.env;

type ErrorData = {
  code: string;
  message: string;
  status: number;
  data: any | null;
};

// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = 'http://localhost:8000';

const defaults = {
  baseURL: API_URL,
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: getStoredAuthToken()
      ? `Bearer ${getStoredAuthToken()}`
      : undefined,
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  } as ErrorData,
};

type ApiMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

const api = <T>(method: ApiMethod, url: string, variables?: any) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}/api/v1${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
      paramsSerializer: objectToQueryString,
      withCredentials: true,
    })
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            reject(error.response.data.errors);
            removeStoredAuthToken();
          } else {
            reject(error.response.data.errors);
          }
        } else {
          reject(defaults.error);
        }
      });
  });
};

type OptimisticUpdateOptions<T> = {
  updatedFields: T;
  currentFields: T;
  setLocalData: (data: T) => void;
};

const optimisticUpdate = async <T>(
  url: string,
  options: OptimisticUpdateOptions<T>
) => {
  try {
    options.setLocalData(options.updatedFields);
    await api<T>('put', url, options.updatedFields);
  } catch (error) {
    options.setLocalData(options.currentFields);
  }
};

export default {
  get: <T>(url: string, variables?: any) => api<T>('get', url, variables),
  post: <T>(url: string, variables?: any) => api<T>('post', url, variables),
  put: <T>(url: string, variables?: any) => api<T>('put', url, variables),
  patch: <T>(url: string, variables?: any) => api<T>('patch', url, variables),
  delete: <T>(url: string, variables?: any) => api<T>('delete', url, variables),
  optimisticUpdate,
};
