import App from '@/App'
import { AppSidebar } from '@/components/AppSidebar'

import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '@/components/Topbar'

const Layout = () => {
  return (
   
    <SidebarProvider>
        <Topbar />
        <AppSidebar />
    <main>
    <Outlet />
    {/* footer */}
    </main>
    </SidebarProvider>
  )
}

export default Layout