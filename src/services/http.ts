import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from 'axios';
  
  import { flashMessage } from '../core/utils';
  

  import {
    AdaptAxiosRequestConfig,
    BaseError,
    StatusCodes,
    StatusCodeType,
  } from './types';
  
  const BASE_URL =
    'https://jsonplaceholder.typicode.com/';
  
  const StatusCode: StatusCodeType = {
    [StatusCodes.UNAUTHORIZED]: {
      type: 'danger',
      message: 'Unauthorized request!',
    },
    [StatusCodes.FORBIDDEN]: {
      type: 'danger',
      message: 'Forbidden request!',
    },
    [StatusCodes.INTERNAL]: {
      type: 'danger',
      message: 'Internal server error!',
    },
  };
  
  const headers: Readonly<Record<string, string | boolean>> = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    'X-Requested-With': 'XMLHttpRequest', 
  };
  
  // We can use the following function to inject the JWT token through an interceptor
  const injectToken = async (config: AdaptAxiosRequestConfig): Promise<any> => {
    try {
      const token = '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';
  
      if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error: any) {
      throw new Error(error);
    }
  };
  
  class Http {
    private instance: AxiosInstance | null = null;
  
    private get http(): AxiosInstance {
      return this.instance != null ? this.instance : this.initHttp();
    }
  
    initHttp() {
      const http = axios.create({
        baseURL: BASE_URL,
        headers,
        withCredentials: true,
      });
  
      http.interceptors.request.use(injectToken, error => Promise.reject(error));
  
      http.interceptors.response.use(
        response => response,
        error => this.handleError(error),
      );
  
      this.instance = http;
      return http;
    }
  
    request<T = any, R = AxiosResponse<T>>(
      config: AxiosRequestConfig,
    ): Promise<R> {
      return this.http.request(config);
    }
  
    get<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<R> {
      return this.http.get<T, R>(url, config);
    }
  
    post<T = any, R = AxiosResponse<T>>(
      url: string,
      data?: T,
      config?: AxiosRequestConfig,
    ): Promise<R> {
      return this.http.post<T, R>(url, data, config);
    }
  
    patch<T = any, R = AxiosResponse<T>>(
      url: string,
      data?: T,
      config?: AxiosRequestConfig,
    ): Promise<R> {
      return this.http.patch<T, R>(url, data, config);
    }
  
    delete<T = any, R = AxiosResponse<T>>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<R> {
      return this.http.delete<T, R>(url, config);
    }
  
    // Handle global app errors
    // We can handle generic app errors depending on the status code
    private handleError(error: AxiosError<BaseError>) {
      const { response } = error;
      const status = response?.status;
      const data = response?.data;
  
      if (status && StatusCode[status]) {
        flashMessage({
          type: StatusCode[status].type,
          message: StatusCode[status].message,
          description: data?.message,
        });
      }
  
      return Promise.reject(error);
    }
  }
  
  export const http = new Http();
  