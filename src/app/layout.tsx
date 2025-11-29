"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";   // ← ADD THIS
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./Components/app-sidebar";
import { X } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();       // ← Detect current route

  const hideSidebar = pathname === "/login"; // ← Hide sidebar & navbar on login

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* -------- NAVBAR (HIDE ON LOGIN) -------- */}
        {!hideSidebar && (
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        )}

        <SidebarProvider>
          <div className={`flex min-h-screen w-full ${!hideSidebar ? "pt-20" : ""}`}>
            
            {/* -------- SIDEBAR (HIDE ON LOGIN) -------- */}
            {!hideSidebar && (
              <div className="hidden lg:block">
                <AppSidebar />
              </div>
            )}

            {/* -------- MAIN PAGE -------- */}
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>

          {/* -------- MOBILE SIDEBAR (HIDE ON LOGIN) -------- */}
          {!hideSidebar && sidebarOpen && (
            <div className="fixed inset-0 top-20 bg-white z-50 lg:hidden overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4">
                <AppSidebar />
              </div>
            </div>
          )}
        </SidebarProvider>

        {/* -------- MOBILE OVERLAY (HIDE ON LOGIN) -------- */}
        {!hideSidebar && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </body>
    </html>
  );
}
