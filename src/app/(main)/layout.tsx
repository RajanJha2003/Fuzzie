import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'
import { currentUser } from '@clerk/nextjs'
import { db } from '@/lib/db'

type Props = { children: React.ReactNode }

const Layout = async(props: Props) => {
  const authUser = await currentUser()
  if (!authUser) return null

  let user = await db.user.findUnique({ where: { clerkId: authUser.id } })
  if (!user) {
    user = await db.user.create({
      data: {
        clerkId: authUser.id,
        name: authUser.firstName + ' ' + authUser.lastName,
        email: authUser.emailAddresses[0].emailAddress,
        // profileImage: authUser.profileImageUrl || '',
      },
    })
  }
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout