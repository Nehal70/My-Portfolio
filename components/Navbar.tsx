'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="absolute top-6 left-6 z-10 text-white">
      {/* Desktop Nav */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-8 text-sm font-medium">
          <NavigationMenuItem>
            <NavigationMenuLink href="#about">About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#experiences">Experiences</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Nav (Sheet) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white text-black">
            <nav className="flex flex-col gap-6 mt-12 text-lg font-medium">
              <a href="#about">About</a>
              <a href="#experiences">Experiences</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

