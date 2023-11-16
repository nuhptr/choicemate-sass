"use client"

import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { usePathname } from "next/navigation"
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const montserrat = Montserrat({
   weight: "600",
   subsets: ["latin"],
})

const routes = [
   { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", color: "text-sky-500" },
   { label: "Conversation", icon: MessageSquare, href: "/conversation", color: "text-violet-500" },
   { label: "Image Generation", icon: ImageIcon, href: "/image", color: "text-pink-700" },
   { label: "Video Generation", icon: VideoIcon, href: "/video", color: "text-orange-700" },
   { label: "Music Generation", icon: Music, href: "/music", color: "text-emerald-500" },
   { label: "Code Generation", icon: Code, href: "/code", color: "text-green-700" },
   { label: "Settings", icon: Settings, href: "/settings" },
]

export default function Sidebar() {
   const pathname = usePathname()

   return (
      <div className="flex flex-col h-full py-4 space-y-4 bg-[#111827] text-white">
         <div className="flex-1 px-3 py-2">
            {/* Logo and Text */}
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
               <div className="relative w-8 h-8 mr-4">
                  <Image src="/logo.png" alt="Logo" fill />
               </div>
               <h1 className={cn("text-2xl font-bold -tracking-wider", montserrat.className)}>ChoiceMate</h1>
            </Link>

            {/* Sidebar Menu */}
            <div className="space-y-1">
               {routes.map((route) => (
                  <Link
                     href={route.href}
                     key={route.href}
                     className={cn(
                        "flex justify-start w-full p-3 text-sm font-medium transition rounded-lg cursor-pointer group hover:text-white hover:bg-white/10",
                        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                     )}>
                     <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                        {route.label}
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}
