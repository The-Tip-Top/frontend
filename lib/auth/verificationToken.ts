import { v4 as uuidv4 } from 'uuid';

export const getVerificationtionTokenByEmail = async (email: string) => {
  const fakeToken = {
    id: uuidv4(),
    email: email,
    token: 'token',
    expires: new Date(),
  };
  try {
    const token = fakeToken;
    // await db.verificationToken.findFirst({
    //   where: { email },
    // });
    return token;
  } catch {
    return null;
  }
};
export const getVerificationtionTokenByToken = async (token: string) => {
  const fakeToken = {
    id: uuidv4(),
    email: 'massi@gmail.com',
    token: token,
    expires: new Date(),
  };
  try {
    const verificationtoken = fakeToken;
    // await db.verificationToken.findUnique({
    //   where: { token },
    // });
    return verificationtoken;
  } catch {
    return null;
  }
};
