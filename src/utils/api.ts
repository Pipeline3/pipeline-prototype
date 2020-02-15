import axios from 'axios';

export interface IOptions {
  baseUrl: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  params?: any;
}

const getParams = (method, params) => {
  switch (method) {
    case 'GET':
      return { params: params };

    case 'PUT':
    case 'POST':
      return { data: params };

    default:
      return null;
  }
};

const requestAPI = async ({ baseUrl, method, url, params }: IOptions) => {
  try {
    let isFormData = params instanceof FormData;
    let headers = Object.assign(
      {
        'Accept-Language': '*',
        'Access-Control-Allow-Origin': '*',
      },
      !isFormData || method !== 'GET'
        ? { 'Content-Type': 'application/json' }
        : {}
    );

    const options = Object.assign(
      {
        method: method,
        headers: headers,
        baseURL: baseUrl,
        url: url,
      },
      getParams(method, params)
    );

    const result = await axios(options);

    return result;
  } catch (error) {
    return error;
  }
};

export default requestAPI;
