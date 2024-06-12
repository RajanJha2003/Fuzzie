import Infobar from '@/components/infobar'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <Sidebar />
        <div className="w-full">
            <Infobar />
            {children}
        </div>


    </div>
  )
}

export default layout