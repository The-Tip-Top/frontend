import Image from 'next/image';
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface FooterProps {
  name: string;
  email: string;
  type?: 'mobile' | 'desktop';
}

const FooterAdmin = ({ name, email, type = 'desktop' }: FooterProps) => {
  const user = useCurrentUser();

  return (
    <footer className="footer bg-red-200">
      <Avatar>
        <AvatarImage src={user?.image || ''} />
        <AvatarFallback className="bg-[#8FB43A] font-bold cursor-pointer">{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">{name}</h1>
        <p className="text-14 truncate font-normal text-gray-600">{email}</p>
      </div>

      <div className="footer_image">
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default FooterAdmin;
