'use client';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import { logoutAccount } from '@/lib/actions/auth.action';

const Settings = () => {
  const user = useCurrentUser();
  // const session = await auth();
  const handleLogout = () => {
    logoutAccount();
  };

  return (
    <div className="h-[300] relative w-full bg-cyan-300">
      {/* {JSON.stringify(session)} */}
      {JSON.stringify(user)}
      <Button onClick={handleLogout}>Sign out</Button>
    </div>
  );
};

export default Settings;
