import React from 'react'
import { DashboardView } from './sections/dashboard'
import { WorksView } from './sections/works'
import { ContactView } from './sections/contact'

const page = () => {
  return (
    <div className="space-y-10">
      <div className="h-[100vh] section-layout">
        <DashboardView/>
      </div>
      
      <div className="space-y-52">
        <div className="section-layout">
          <WorksView/>
        </div>
        <ContactView/>
      </div>

    </div>
  )
}

export default page