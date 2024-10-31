import React from 'react'

// component
import HeaderComponent from '@/app/components/header'

const DashboardLayout = ({children}:any) => {
  return (
    <div className=" ">
        <div className="section-layout">
            <HeaderComponent/>
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout