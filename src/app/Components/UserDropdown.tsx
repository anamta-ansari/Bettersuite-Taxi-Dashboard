"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-gray-50 px-2 py-2 rounded-lg shadow hover:bg-gray-100 transition"
      >
        <FaUserCircle className="text-3xl text-gray-600" />
        <div className="text-left leading-tight">
          <p className="text-sm font-semibold text-gray-800">John Doe</p>
          <p className="text-xs text-gray-500">Tester</p>
        </div>
        <IoMdArrowDropdown
          className={`text-xl text-gray-600 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-25 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1">
            <li>
  <Link
    href="/edit-profile"   // <-- Your desired route
    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  >
    Edit Profile
  </Link>
</li>
            <li>
              <Link
              href="/login"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => alert("Logout clicked")}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
