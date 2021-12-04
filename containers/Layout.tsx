import { Children, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import SidebarContext, { SidebarProvider } from 'context/SidebarContext'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Main from './Main'

interface ILayout{
  children: React.ReactNode
}

function Layout({ children }: ILayout) {
  const CSidebarContext = useContext(SidebarContext)

  const router = useRouter()

  useEffect(() => {
    if (CSidebarContext.isSidebarOpen) {
      CSidebarContext.closeSidebar()
    }
  }, [CSidebarContext, router.asPath])

  return <SidebarProvider>
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${CSidebarContext.isSidebarOpen && 'overflow-hidden'}`}
      >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          {children}
        </Main>
      </div>
    </div>
  </SidebarProvider>
}

export default Layout