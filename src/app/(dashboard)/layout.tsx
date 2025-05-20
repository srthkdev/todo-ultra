
import { Button } from "@/components/ui/button";

import { ArrowUpRight, BarChart2, CreditCard, Layout, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      
      <div className="flex h-full">
        
        <div id="main" className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}