'use client';

import { Card } from '../ui/card';
import AdminSignInForm from './signInAdmin';

const AdminAuthForm = () => {
  return (
    <>
      <Card className="shadow-lg rounded-lg p-4  bg-white my-20">
        <section className="font-lato flex h-max md:max-w-[520px] md:w-[500px] md:min-w-[320] w-[270px] flex-col justify-center gap-4">
          <header className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-1 md:gap-3">
              <h1 className="text-24 lg:text-26 flex justify-center font-semibold text-gray-900">Connexion </h1>
            </div>
          </header>

          <AdminSignInForm />
        </section>
      </Card>
    </>
  );
};

export default AdminAuthForm;
