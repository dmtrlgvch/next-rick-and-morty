"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      ref={modalRef}
      className="fixed overflow-y-auto inset-0 z-50 flex items-center justify-center backdrop-blur-lg"
      onClick={handleBackdropClick}
    >
      <div className="rounded-2xl relative overflow-hidden">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10 rounded-full p-1 shadow-md cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="overflow-y-auto max-h-[calc(90vh-2rem)]">{children}</div>
      </div>
    </div>
  );
}
