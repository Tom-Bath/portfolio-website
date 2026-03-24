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
import { t, type Locale } from "@/lib/i18n"

interface SidebarLayoutProps {
  children: React.ReactNode
  title?: string
  baseUrl?: string
  locale?: Locale
  invertHeader?: boolean
}

export function SidebarLayout({ children, title, baseUrl, locale = "en", invertHeader = false }: SidebarLayoutProps) {
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

  const homeUrl = locale === "ja" ? `${baseUrl}/ja/` : `${baseUrl}/`

  return (
    <SidebarProvider>
      <AppSidebar locale={locale} base={baseUrl} />
      <main className="w-full flex flex-col">
        {title && baseUrl && (
          <div
            className={`sticky top-0 z-20 flex items-center gap-4 px-6 py-4 transition-transform duration-300 ${
              invertHeader
                ? "bg-foreground [&_button]:text-background [&_svg]:text-background **:data-[slot=breadcrumb-list]:text-background/60 **:data-[slot=breadcrumb-page]:text-background **:data-[slot=breadcrumb-link]:hover:text-background"
                : "bg-background border-b"
            } ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
          >
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={homeUrl}>{t(locale, "home")}</BreadcrumbLink>
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
