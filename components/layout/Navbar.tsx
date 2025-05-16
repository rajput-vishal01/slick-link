"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <nav
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/80 shadow-lg dark:bg-black/80 backdrop-blur-xl border border-gray-100/30 dark:border-gray-800/30"
            : "bg-white/50 dark:bg-black/50 backdrop-blur-md"
        }`}>
        <div className="px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-lg">
                s
              </span>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent transition-opacity group-hover:opacity-80">
              slickLink
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="relative group">
                <button className="flex items-center text-sm font-medium">
                  {session.user?.name?.split(" ")[0]}
                  <ChevronDown
                    size={16}
                    className="ml-1 opacity-70 group-hover:opacity-100"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-900 shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 border border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => signOut()}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border-t border-gray-100 dark:border-gray-800">
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => signIn()}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                  Sign up
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/20 dark:hover:bg-gray-800/20 transition-colors"
            aria-label="Toggle menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100/30 dark:border-gray-800/30">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                {session ? (
                  <>
                    <span className="text-sm font-medium mb-4 block">
                      {session.user?.name}
                    </span>
                    <button
                      onClick={() => {
                        signOut();
                        setMobileOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        signIn();
                        setMobileOpen(false);
                      }}
                      className="w-full px-4 py-2 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
