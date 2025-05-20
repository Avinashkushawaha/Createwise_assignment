
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  ChevronDown,
  FileText,
  BookOpen,
  Link2,
  Layers,
  Box,
  CreditCard,
  LinkIcon as Affiliate,
  HelpCircle,
  Bell,
  MessageSquare,
  User,
  Package,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link } from 'react-router-dom'
import { useState } from "react"
import { Button } from "./ui/button"

export function AppSidebar() {
    const [articlesOpen, setArticlesOpen] = useState(true);

  return (
    // <Sidebar>
    //   <SidebarHeader>
    //     <h1 className="text-2xl font-bold">abun</h1>
    // </SidebarHeader>
    //   <SidebarContent>
    //     <SidebarGroup>
    //          <SidebarMenuItem>
    //         <SidebarMenuButton>
    //             <Link to="">Articles</Link>
    //         </SidebarMenuButton>
    //          </SidebarMenuItem>
    //     </SidebarGroup>
    //   </SidebarContent>
    //   <SidebarFooter />
    // </Sidebar>
     <div className="w-65 border-r bg-background h-screen overflow-y-auto">
      <div className="p-2">
        <div className="flex items-center justify-start mb-6">
          <h2 className="text-2xl font-bold pl-8">abun</h2>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-purple-500 mr-2"></div>
                amazon.com
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>amazon.com</DropdownMenuItem>
            <DropdownMenuItem>Add new site</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="space-y-1 mt-6">
          <div>
            <Button
              variant="ghost"
              className="w-full justify-start items-center mb-1"
              onClick={() => setArticlesOpen(!articlesOpen)}
            >
              <FileText className="mr-2 h-5 w-5 text-blue-500" />
              <span>Articles</span>
              <ChevronDown
                className={`ml-auto h-4 w-4 transition-transform ${articlesOpen ? "transform rotate-180" : ""}`}
              />
            </Button>

            {articlesOpen && (
              <div className="ml-6 space-y-1 border-l pl-2">
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Create Article</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Generated Articles</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>AI Keyword Projects</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Steal Competitor Keyword</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Import Keyword from GCS</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Manual Keyword to Article</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Bulk Keyword to Article</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Longtail Keyword to Article</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Article Settings</span>
                </Button>
                <Button variant="blue" size="sm" className="w-full justify-between hover:text-blue-700 ">
                  <span>Generated Articles</span>
                </Button>
                
              </div>
            )}
          </div>

          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
            <span>Auto Blog</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Link2 className="mr-2 h-5 w-5 text-blue-500" />
            <span>Internal Links</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Layers className="mr-2 h-5 w-5 text-blue-500" />
            <span>Free Backlinks</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Package className="mr-2 h-5 w-5 text-blue-500" />
            <span>Integrations</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <CreditCard className="mr-2 h-5 w-5 text-blue-500" />
            <span>Subscription</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Link2 className="mr-2 h-5 w-5 text-blue-500" />
            <span>Affiliate Program</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
            <span>Help Center</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-5 w-5 text-blue-500" />
            <span>Updates</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
            <span>Live Chat Support</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-5 w-5 text-blue-500" />
            <span>Profile</span>
          </Button>
        </div>
      </div>
    </div>
  )
}



