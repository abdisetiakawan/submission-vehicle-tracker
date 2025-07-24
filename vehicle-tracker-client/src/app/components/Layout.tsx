"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Truck, MapPin, Home } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">
                Vehicle Tracker
              </h1>
            </div>
            <nav className="flex space-x-6">
              <Link
                href="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>Banguntapan, Yogyakarta, Indonesia</span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
