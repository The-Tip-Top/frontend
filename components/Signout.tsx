/* eslint-disable prettier/prettier */
import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SignOutButton = async () => {
  const session = await auth();

  return (
    <div className="bg-[#8FB43A] text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
      {session?.user ? (
        <form
          action={async () => {
            // 'use server';
            await signOut();
          }}
        >
          <Button type="submit">Sign out</Button>
        </form>
      ) : (
        <Link href="/sign-up" legacyBehavior>
          <a className="bg-[#8FB43A] text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Inscription
          </a>
        </Link>
      )}
    </div>
  );
};

export default SignOutButton;
