import AuthForm from '@/components/auth/AuthForm';

const SignIn = () => {
  return (
    <section className="flex-center size-full px-3 sm:px-6  flex-row">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
