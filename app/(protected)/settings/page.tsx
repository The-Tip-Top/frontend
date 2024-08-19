import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const Settings = async () => {
  const session = await auth();
  return (
    <div className="h-[300] relative w-full bg-cyan-300">
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';
          await signOut();
          redirect('/home')
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default Settings;
