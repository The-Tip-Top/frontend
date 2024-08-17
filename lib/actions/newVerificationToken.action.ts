import { myFetch } from '../hooks/useFetch';

export interface ResponseMessage {
  success?: string;
  error?: string;
}
export interface ResponseMessageWithStatus {
  status: number;
  success?: string;
  error?: string;
}
export const newVerification = async (token: string) => {
  try {
    return await myFetch<ResponseMessage>(`newVerification`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    return null;
  }
};
