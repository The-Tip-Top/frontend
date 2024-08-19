import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {logoutAccount} from '../lib/actions/admin.action';
import React from 'react'

interface FooterProps {
  name: string;
  email: string;
  type?: 'mobile' | 'desktop'
}

const FooterAdmin = ({ name, email, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/sign-in')
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {name.charAt(0)}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default FooterAdmin