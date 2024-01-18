import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({});

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };

  private handleResponse = <T>(response: AxiosResponse<T>) => response;

  private handleError = (error: any) => Promise.reject(error);

  public getRequest = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return (await this.instance.get<T>(url, config)).data;
  };
}

export const httpService = new HttpService();
