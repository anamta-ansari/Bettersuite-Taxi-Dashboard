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
    { title: "Marketing", dropdown: true, icon: FiBarChart2, children: [{ title: "coupons", url: "/marketing/coupons" }, { title: "Gift Cards", url: "/marketing/giftcards" }, { title: "Announcement", url: "/marketing/annoucement" }] },
    { title: "Payout", dropdown: true, icon: FiDollarSign, children: [ { title: "Payout Methods", url: "/payout/payout-methods" }, { title: "Driver Payout", url: "/payout/driver-payout" }] },
    { title: "Cab", dropdown: true, icon: FiAlertCircle, children: [ { title: "Services", url: "/cab/services" }, { title: "Vehicles", url: "/cab/vehicles" }] },
    { title: "Dispatcher", url: "/dispatcher", icon: FiClipboard, dropdown: false },
    { title: "Orders", url: "/orders", icon: FiShoppingCart, dropdown: false },
    { title: "Customers", url: "/customers", icon: FiUserCheck, dropdown: false },
    { title: "Accounting", dropdown: true, icon: FiDollarSign, children: [{ title: "Admin", url: "/accounting/admin" }, { title: "Customer", url: "/accounting/customer" }, { title: "Driver", url: "/accounting/driver" }] },
    { title: "SOS", url: "/sos", icon: FiAlertCircle, dropdown: false },
    { title: "Support", url: "/support", icon: FiLifeBuoy, dropdown: false },
    { title: "Fleets", url: "/fleets", icon: FiTruck, dropdown: false },
    { title: "Management", dropdown: true, icon: FiLayers, children: [{ title: "Cancel Reasons", url: "/management/cancel-reasons" }, { title: "Pricing", url: "/management/pricing" }, { title: "Rating points", url: "/management/rating-points" } , { title: "Vehicles", url: "/management/vehicles" } , { title: "Regions", url: "/management/regions" },{ title: "Payment Gateways", url: "/management/payment-gateways" },{ title: "SMS Provider", url: "/management/sms-provider" },{ title: "Staff", url: "/management/staff" }] },
    { title: "Settings", url: "/settings", icon: FiSettings, dropdown: false },
  ];

  return (
    <>
 <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 shadow-sm">
  <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 sm:h-20 max-w-7xl mx-auto w-full">
    {/* Left Side */}
    <div className="flex items-center gap-3 min-w-0">
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        ) : (
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        )}
      </button>
      <h1 className="hidden lg:block text-2xl font-bold text-gray-800 whitespace-nowrap">BetterSuite</h1>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <button 
        onClick={toggleTheme} 
        className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
      >
        <FaSun className={`text-yellow-500 text-lg transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-100"}`} />
        <FaMoon className={`text-gray-700 text-lg transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-30"}`} />
      </button>
      <UserDropdown />
    </div>
  </div>
</nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Menu</h2>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  if (item.dropdown) {
                    return (
                      <details key={item.title} className="group">
                        <summary className="flex items-center justify-between gap-2 cursor-pointer py-3 px-3 rounded-md hover:bg-gray-100 transition-colors">
                          <span className="flex items-center gap-3 text-base text-gray-800">
                            <Icon className="text-lg flex-shrink-0" />
                            {item.title}
                          </span>
                          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 flex-shrink-0" />
                        </summary>
                        <div className="ml-8 mt-2 space-y-1">
                          {item.children && item.children.map((sub) => (
                            <a 
                              key={sub.title} 
                              href={sub.url} 
                              onClick={() => setMobileMenuOpen(false)} 
                              className={pathname === sub.url 
                                ? "block py-2 px-3 rounded-md text-sm text-blue-600 font-semibold bg-blue-50" 
                                : "block py-2 px-3 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors capitalize"
                              }
                            >
                              • {sub.title}
                            </a>
                          ))}
                        </div>
                      </details>
                    );
                  } else {
                    return (
                      <a 
                        key={item.title} 
                        href={item.url} 
                        onClick={() => setMobileMenuOpen(false)} 
                        className={pathname === item.url 
                          ? "flex items-center gap-3 py-3 px-3 rounded-md text-base bg-blue-600 text-white font-medium" 
                          : "flex items-center gap-3 py-3 px-3 rounded-md text-base text-gray-800 hover:bg-gray-100 transition-colors"
                        }
                      >
                        <Icon className="text-lg flex-shrink-0" />
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
