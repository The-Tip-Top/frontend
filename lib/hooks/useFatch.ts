type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
}

const BASE_URL = 'http://localhost:3001/api/v1';
export const myFetch = async <T>(url: string, fetchOption: FetchOptions = {}): Promise<T> => {
  const { method = 'GET', headers = {}, body = null } = fetchOption;
  try {
    console.log(url);
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASE_URL}/${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    console.log('fetch res', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
