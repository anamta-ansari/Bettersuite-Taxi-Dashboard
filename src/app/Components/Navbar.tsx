"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Menu, X, ChevronDown } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { usePathname } from "next/navigation";
import { FiHome, FiUsers, FiTruck, FiBarChart2, FiDollarSign, FiClipboard, FiShoppingCart, FiUserCheck, FiAlertCircle, FiLifeBuoy, FiLayers, FiSettings } from "react-icons/fi";

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => setIsDark(!isDark);

  const menuItems = [
    { title: "Overview", url: "/", icon: FiHome, dropdown: false },
    { title: "Drivers", dropdown: true, icon: FiUsers, children: [{ title: "List", url: "/driver/list" }, { title: "pending verification", url: "/driver/pending-verification" }, { title: "settings", url: "/driver/settings" }] },
    { title: "Marketing", dropdown: true, icon: FiBarChart2, children: [{ title: "coupons", url: "/marketing/coupons" }, { title: "Gigt Cards", url: "/marketing/giftcards" }, { title: "Annoucement", url: "/marketing/annoucement" }] },
    { title: "Payout", dropdown: true, icon: FiDollarSign, children: [ { title: "Payout Methods", url: "payout/payout-methods" }, { title: "Driver Payout", url: "payout/driver-payout" }] },
    { title: "Dispatcher", url: "/dispatcher", icon: FiClipboard, dropdown: false },
    { title: "Orders", url: "/orders", icon: FiShoppingCart, dropdown: false },
    { title: "Customers", url: "/customers", icon: FiUserCheck, dropdown: false },
    { title: "Accounting", dropdown: true, icon: FiDollarSign, children: [{ title: "Admin", url: "/accounting/admin" }, { title: "Customer", url: "/accounting/customer" }, { title: "Driver", url: "/accounting/driver" }] },
    { title: "SOS", url: "/sos", icon: FiAlertCircle, dropdown: false },
    { title: "Support", url: "/support", icon: FiLifeBuoy, dropdown: false },
    { title: "Fleets", url: "/fleets", icon: FiTruck, dropdown: false },
    { title: "Management", dropdown: true, icon: FiLayers, children: [{ title: "Cancel Reasons", url: "" }, { title: "Pricing", url: "" }, { title: "Rating points", url: "" } , { title: "Vehicles", url: "" } , { title: "Regions", url: "" },{ title: "payment gateways", url: "" },{ title: "SMS provider", url: "" },{ title: "Staff", url: "" }] },
    { title: "Settings", url: "/settings", icon: FiSettings, dropdown: false },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-4 lg:px-6 h-20 bg-gray-50 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
          <h1 className="hidden lg:block text-[25px] font-bold">BetterSuite</h1>
        </div>

        <div className="flex gap-4 lg:gap-8">
          <button onClick={toggleTheme} className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-white border rounded-full shadow hover:bg-gray-100 transition">
            <FaSun className={`text-yellow-500 text-lg lg:text-xl transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-100"}`} />
            <FaMoon className={`text-gray-700 text-lg lg:text-xl transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-30"}`} />
          </button>
          <UserDropdown />
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Menu</h2>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  if (item.dropdown) {
                    return (
                      <details key={item.title} className="group">
                        <summary className="flex items-center justify-between gap-2 cursor-pointer py-3 px-3 rounded-md hover:bg-gray-100">
                          <span className="flex items-center gap-3 text-[16px] text-gray-800">
                            <Icon className="text-lg" />
                            {item.title}
                          </span>
                          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children && item.children.map((sub) => (
                            <a key={sub.title} href={sub.url} onClick={() => setMobileMenuOpen(false)} className={pathname === sub.url ? "block py-2 px-3 rounded-md text-[15px] text-blue-600 font-semibold" : "block py-2 px-3 rounded-md text-[15px] text-gray-700 hover:bg-gray-100"}>
                              • {sub.title}
                            </a>
                          ))}
                        </div>
                      </details>
                    );
                  } else {
                    return (
                      <a key={item.title} href={item.url} onClick={() => setMobileMenuOpen(false)} className={pathname === item.url ? "flex items-center gap-3 py-3 px-3 rounded-md text-[16px] bg-blue-600 text-white" : "flex items-center gap-3 py-3 px-3 rounded-md text-[16px] text-gray-800 hover:bg-gray-100"}>
                        <Icon className="text-lg" />
                        {item.title}
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}