import * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface SidebarLayoutProps {
  children: React.ReactNode
  title?: string
  baseUrl?: string
}

export function SidebarLayout({ children, title, baseUrl }: SidebarLayoutProps) {
  const [headerVisible, setHeaderVisible] = React.useState(true)
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setHeaderVisible(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex flex-col">
        {title && baseUrl && (
          <div
            className={`sticky top-0 z-10 flex items-center gap-4 border-b px-6 py-4 bg-background transition-transform duration-300 ${
              headerVisible ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={baseUrl}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
        {children}
      </main>
    </SidebarProvider>
  )
}
