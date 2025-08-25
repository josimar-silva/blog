"use client";

import { Menu, Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/app/__components/ui/button";
import { Input } from "@/app/__components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/app/__components/ui/sheet";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false),
    [mounted, setMounted] = useState(false),
    { theme, setTheme } = useTheme();

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Bookshelf", href: "/bookshelf" },
      { name: "Now", href: "/now" },
      { name: "Contact", href: "/contact" },
    ],
    toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/public" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                JS
              </span>
            </div>
            <span className="font-bold text-xl">Josimar Silva</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {/* Search */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hidden sm:flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t bg-background/95 backdrop-blur-sm">
          <div className="container py-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-10"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
