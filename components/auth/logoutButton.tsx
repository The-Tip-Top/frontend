"use client"

import { logoutAccount } from "@/lib/actions/auth.action"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface LogoutButtonProps {
    children?: React.ReactNode
}


const LogoutButton = ({children}: LogoutButtonProps) => {
  const router = useRouter()
  const onClick = async () => {
    await signOut({ redirect: false }) 
    router.push('/sign-in')
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
        {children}
    </span>
  )
}

export default LogoutButton
