import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { logoutAccount } from '../lib/actions/auth.action';
import React from 'react'
import { useCurrentUser } from '@/lib/hooks/useCurrentUser';
import LogoutButton from './auth/logoutButton';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { FaUser } from 'react-icons/fa';

interface FooterProps {
  name: string;
  email: string;
  type?: 'mobile' | 'desktop'
}

const FooterAdmin = ({ name, email, type = 'desktop' }: FooterProps) => {
  const router = useRouter();
  const user = useCurrentUser()

  return (
    <footer className="footer">
      {/* <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {name.charAt(0)}
        </p>
      </div> */}
      <Avatar>
        <AvatarImage src={user?.image || ""} />
        <AvatarFallback className='bg-[#8FB43A] font-bold cursor-pointer'>
          {name.charAt(0)} 
          {/* <FaUser className='text-white' /> */}
        </AvatarFallback>
      </Avatar>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {email}
        </p>
      </div>

      <LogoutButton>
        <div className="footer_image">
          <Image src="icons/logout.svg" fill alt="jsm" />
        </div>
      </LogoutButton>
    </footer>
  )
}

export default FooterAdmin