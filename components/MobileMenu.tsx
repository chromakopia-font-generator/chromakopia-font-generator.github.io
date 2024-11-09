// components/MobileMenu.tsx

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { getCategories } from '@/lib/utils';
import SearchBar from './SearchBar';

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const allCategories = getCategories();

  const handleNavClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b">
            <SheetTitle>
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <img
                  src="/logo.png"
                  className="h-[40px] w-auto object-contain mr-2"
                  alt="classroom 6x logo"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="p-4 border-b">
            <SearchBar />
          </div>
          <nav className="flex-grow overflow-y-auto">
            <ul className="py-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 py-3 px-4"
                  onClick={() => handleNavClick(`/category`)}
                >
                  All Games
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </li>
              {allCategories.map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 py-3 px-4"
                    onClick={() => handleNavClick(`/category/${item}`)}
                  >
                    {item}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;