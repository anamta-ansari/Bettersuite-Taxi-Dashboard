"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { FiChevronDown, FiGrid, FiMap, FiPackage } from "react-icons/fi";

import {
  FiHome,
  FiUsers,
  FiTruck,
  FiBarChart2,
  FiDollarSign,
  FiClipboard,
  FiShoppingCart,
  FiUserCheck,
  FiAlertCircle,
  FiLifeBuoy,
  FiLayers,
  FiSettings,
} from "react-icons/fi";

type SidebarItem =
  | { title: string; url: string; icon: any; dropdown?: false }
  | { title: string; icon: any; dropdown: true; children: { title: string; url: string }[] };

const items: SidebarItem[] = [
  { title: "Overview", url: "/", icon: FiHome },

  {
    title: "Drivers",
    dropdown: true,
    icon: FiUsers,
    children: [
      { title: "List", url: "/driver/list" },
      { title: "Pending Verification", url: "/driver/pending-verification" },
      { title: "Settings", url: "/driver/settings" },
    ],
  },

  {
    title: "Marketing",
    dropdown: true,
    icon: FiBarChart2,
    children: [
      { title: "Coupons", url: "/marketing/coupons" },
      { title: "Gift Cards", url: "/marketing/giftcards" },
      { title: "Annoucment", url: "/marketing/annoucements" },
    ],
  },

  {
    title: "Payout",
    dropdown: true,
    icon: FiDollarSign,
    children: [
      { title: "Payout Methods", url: "/payout/payout-methods" },
      { title: "Driver Payout", url: "/payout/driver-payout" },
    ],
  },

  { title: "Dispatcher", url: "/dispatcher", icon: FiClipboard },
  { title: "Orders", url: "/orders", icon: FiShoppingCart },
  { title: "Customers", url: "/customers", icon: FiUserCheck },

  {
    title: "Accounting",
    dropdown: true,
    icon: FiDollarSign,
    children: [
      { title: "Admin", url: "/accounting/admin" },
      { title: "Customer", url: "/accounting/customer" },
      { title: "Driver", url: "/accounting/driver" },
    ],
  },

  { title: "SOS", url: "/sos", icon: FiAlertCircle },
  { title: "Heat Map", url: "/heatmap", icon: FiMap },
  { title: "Zones", url: "/zones", icon: FiGrid },
  { title: "Services", url: "/services", icon: FiPackage },
  { title: "Support", url: "/support", icon: FiLifeBuoy },
  { title: "Fleets", url: "/fleets", icon: FiTruck },

  {
    title: "Management",
    dropdown: true,
    icon: FiLayers,
    children: [
      { title: "Cancel Reasons", url: "/management/teams" },
      { title: "Pricing", url: "/management/roles" },
      { title: "Rating Points", url: "/management/reports" },
      { title: "Vehicles", url: "/management/reports" },
      { title: "Regions", url: "/management/reports" },
      { title: "Payment Gateways", url: "/management/reports" },
      { title: "SMS Provider", url: "/management/reports" },
      { title: "Staffs", url: "/management/reports" },
    ],
  },

  { title: "Settings", url: "/settings", icon: FiSettings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="lg:fixed lg:top-20 lg:left-0 lg:h-[calc(100vh-5rem)] lg:w-60 w-full bg-white shadow-none lg:shadow">
      <SidebarHeader />
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel className="text-[18px] ml-3 mb-8 font-normal">
            Better Taxi
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.dropdown ? (
                    <details className="group mb-2">
                      <summary className="flex items-center justify-between gap-2 cursor-pointer py-2 px-2 rounded-md hover:text-blue-500">
                        <span className="flex items-center gap-2 text-[16px]">
                          <item.icon className="text-lg" />
                          {item.title}
                        </span>
                        <FiChevronDown className="transition-transform group-open:rotate-180" />
                      </summary>

                      <div className="ml-6 mt-1">
                        <ul className="list-disc list-outside space-y-2">
                          {item.children.map((sub) => (
                            <li key={sub.title}>
                              <a href={sub.url} className={`block text-[15px] px-2 py-1 rounded-md hover:text-blue-600 ${pathname === sub.url ? "text-blue-600 font-semibold" : "text-gray-700"}`}>
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url} className={`flex items-center gap-2 px-2 py-2 rounded-md transition-colors hover:text-blue-600 ${pathname === item.url ? "bg-blue-600 text-white" : "text-gray-800"}`}>
                        <item.icon className="text-lg" />
                        <span className="text-[16px]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
