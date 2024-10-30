import React from 'react'

// component
import HeaderComponent from '@/app/components/header'

const DashboardLayout = ({children}:any) => {
  return (
    <div className="space-y-10 ">
        <div className="section-layout">
            <HeaderComponent/>
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout