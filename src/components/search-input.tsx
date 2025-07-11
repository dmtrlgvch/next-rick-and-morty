"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounceEffect } from "ahooks";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useDebounceEffect(
    () => {
      const params = new URLSearchParams(searchParams);
      if (searchTerm.trim()) {
        params.set("page", "1");
        params.set("query", searchTerm);
      } else {
        params.delete("query");
        params.delete("page");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    [searchTerm],
    {
      wait: 500,
    }
  );

  return (
    <input
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      type="search"
      name="search-input"
      placeholder="Search"
      className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors backdrop-blur-sm"
    />
  );
}
