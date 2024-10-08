type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
}

// const BASE_URL = 'http://localhost:3001/api/v1';
// const BASE_URL = 'http://backend.dsp5-archi-022a-4-5-g2.fr:3000//api/v1';
// const BASE_URL = 'http://51.91.81.23:3000/api/v1';
const BASE_URL = 'https://dsp5-archi-o22a-4-5-g2.online/api/v1';
export const myFetch = async <T>(url: string, fetchOption: FetchOptions = {}): Promise<T> => {
  const { method = 'GET', headers = {}, body = null } = fetchOption;
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      redirect: 'follow',
    };

    if (body && method !== 'GET') {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASE_URL}/${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
