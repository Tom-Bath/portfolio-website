import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { t, type Locale } from "@/lib/i18n"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  locale?: Locale
  base?: string
}

export function AppSidebar({ locale = "en", base = "/portfolio-website", ...props }: AppSidebarProps) {
  const [altUrl, setAltUrl] = React.useState("#")
  const prefix = locale === "ja" ? `${base}/ja` : base

  React.useEffect(() => {
    const path = window.location.pathname
    setAltUrl(
      locale === "en"
        ? base + "/ja" + path.slice(base.length)
        : path.replace(`${base}/ja`, base)
    )
  }, [locale, base])

  const navMain = [
    {
      title: t(locale, "about"),
      items: [
        { title: t(locale, "home"), url: `${prefix}/` },
        { title: t(locale, "contact"), url: `${prefix}/contact` },
      ],
    },
    {
      title: t(locale, "caseStudies"),
      items: [
        { title: t(locale, "warehouseFlow"), url: `${prefix}/warehouse-flow` },
        { title: t(locale, "xrNav"), url: `${prefix}/xr-navigation` },
        { title: t(locale, "mapsRoute"), url: `${prefix}/maps-route-planner` },
      ],
    },
  ]

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <a
          href={altUrl}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted/40 transition-colors"
        >
          {t(locale, "switchLang")}
        </a>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
