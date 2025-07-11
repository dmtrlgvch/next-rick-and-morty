"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-10 w-full backdrop-blur-lg bg-black/20 border-b border-gray-800/30">
        <nav className="py-6 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link
              href={"/"}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            >
              R&M Explorer
            </Link>

            <div className="flex space-x-8">
              <Link
                href="/characters"
                className="text-green-400 font-semibold transition-all duration-300 relative group"
              >
                Characters
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300",
                    { "w-full": pathname === "/characters" }
                  )}
                ></span>
              </Link>
              <Link
                href="/episodes"
                className="text-blue-400 font-semibold transition-all duration-300 relative group"
              >
                Episodes
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300",
                    { "w-full": pathname === "/episodes" }
                  )}
                ></span>
              </Link>
              <Link
                href="/locations"
                className="text-purple-400 font-semibold transition-all duration-300 relative group"
              >
                Locations
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300",
                    { "w-full": pathname === "/locations" }
                  )}
                ></span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
