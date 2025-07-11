"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

type PaginationProps = {
  totalPages: number;
  accentColor?: string;
};

export default function Pagination({ totalPages, accentColor = "bg-blue-600" }: PaginationProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createQueryString = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      return params.toString();
    },
    [searchParams]
  );

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    const startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

    pages.push(
      <Link
        key={1}
        href={`?${createQueryString(1)}`}
        className={`w-10 h-10 flex items-center justify-center mx-1 rounded-2xl ${
          currentPage === 1
            ? `${accentColor} text-white`
            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
        }`}
        aria-current={currentPage === 1 ? "page" : undefined}
      >
        1
      </Link>
    );

    if (startPage > 2) {
      pages.push(
        <span
          key="start-ellipsis"
          className="w-10 h-10 flex items-center justify-center mx-1 text-gray-400"
        >
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={`?${createQueryString(i)}`}
          className={`w-10 h-10 flex items-center justify-center mx-1 rounded-2xl ${
            currentPage === i
              ? `${accentColor} text-white`
              : "bg-gray-700 text-gray-200 hover:bg-gray-600"
          }`}
          aria-current={currentPage === i ? "page" : undefined}
        >
          {i}
        </Link>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <span
          key="end-ellipsis"
          className="w-10 h-10 flex items-center justify-center mx-1 text-gray-400"
        >
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <Link
          key={totalPages}
          href={`?${createQueryString(totalPages)}`}
          className={`w-10 h-10 flex items-center justify-center mx-1 rounded-2xl ${
            currentPage === totalPages
              ? `${accentColor} text-white`
              : "bg-gray-700 text-gray-200 hover:bg-gray-600"
          }`}
          aria-current={currentPage === totalPages ? "page" : undefined}
        >
          {totalPages}
        </Link>
      );
    }

    return pages;
  };

  return (
    <nav className="flex items-center justify-center my-4" aria-label="Pagination">
      <Link
        href={`?${createQueryString(currentPage - 1)}`}
        className={`w-10 h-10 flex items-center justify-center mx-1 rounded-2xl ${
          currentPage === 1
            ? "bg-gray-700 text-gray-400 opacity-50 cursor-not-allowed"
            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
        }`}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      {renderPageNumbers()}

      <Link
        href={`?${createQueryString(currentPage + 1)}`}
        className={`w-10 h-10 flex items-center justify-center mx-1 rounded-2xl ${
          currentPage === totalPages
            ? "bg-gray-700 text-gray-400 opacity-50 cursor-not-allowed"
            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
        }`}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </nav>
  );
}
