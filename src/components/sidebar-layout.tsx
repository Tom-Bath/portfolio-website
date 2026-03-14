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
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex flex-col">
        {title && baseUrl && (
          <div className="flex items-center gap-4 border-b px-6 py-4">
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
