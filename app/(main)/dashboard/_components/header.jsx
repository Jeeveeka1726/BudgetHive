import React from "react";
import { Button } from ".././../../../components/ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import BudgetHiveLogo from "@/public/logo.jpeg";
import Image from "next/image";

const Header = async () => {
    await checkUser();
  
    return (
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={BudgetHiveLogo}
              alt="Budget Hive Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-900">BudgetHive</span>
          </Link>
  
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>
              <a href="/transaction/create">
                <Button className="flex items-center gap-2">
                  <PenBox size={18} />
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </a>
            </SignedIn>
  
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </header>
    );
  };
  
export default Header;