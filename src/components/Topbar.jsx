// import React from 'react'

// const Topbar = () => {
//   return (
//     <div>Topbar</div>
//   )
// }

// export default Topbar

import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { ArticlesTable } from "./ArticlesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  const [activeTab, setActiveTab] = useState("generated");

  return (
    <div className="flex h-screen bg-background">
        <div className="w-64 bg-white border-r top-0 h-screen fixed z-10">
      <AppSidebar />
      </div>
      <div className="ml-68 flex-1 flex flex-col overflow-y-auto">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl font-bold mb-6">Articles</h1>

            <Tabs 
              defaultValue="generated" 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <div className="flex justify-center mb-4">
                <TabsList className="grid grid-cols-4 w-auto ">
                  <TabsTrigger value="generated" className="px-6 data-[state=active]:bg-blue-500 data-[state=active]:text-white ">
                    Generated Articles
                  </TabsTrigger>
                  <TabsTrigger value="published" className="px-6 data-[state=active]:bg-blue-500 data-[state=active]:text-white ">
                    Published Articles
                  </TabsTrigger>
                  <TabsTrigger value="scheduled" className="px-6 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Scheduled Articles
                  </TabsTrigger>
                  <TabsTrigger value="archived" className="px-6 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Archived Articles
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="mb-4 flex justify-center">
                <Input 
                  placeholder="Search for Title & Keywords..." 
                  className="max-w-sm h-7 text-xs px-2" 
                />
              </div>

              <TabsContent value="generated">
                <ArticlesTable activeTab={activeTab} />
              </TabsContent>
              <TabsContent value="published">
                <ArticlesTable activeTab={activeTab} />
              </TabsContent>
              <TabsContent value="scheduled">
                <ArticlesTable activeTab={activeTab} />
              </TabsContent>
              <TabsContent value="archived">
                <ArticlesTable activeTab={activeTab} />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}