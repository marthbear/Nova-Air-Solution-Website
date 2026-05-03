"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Banner() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image
            src="/novalogo.jpg"
            alt="Nova Air Solution"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-bold hidden sm:block">Nova Air Solution</span>
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => router.push("/about")}
            className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer ${
              isActive("/about")
                ? "bg-white text-blue-700"
                : "hover:bg-blue-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() => router.push("/service-requests")}
            className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer ${
              isActive("/service-requests")
                ? "bg-white text-blue-700"
                : "hover:bg-blue-600"
            }`}
          >
            Request Service
          </button>
          <button
            onClick={() => router.push("/servicearea")}
            className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer ${
              isActive("/servicearea")
                ? "bg-white text-blue-700"
                : "hover:bg-blue-600"
            }`}
          >
            Service Area
          </button>
          <button
            onClick={() => router.push("/contact")}
            className={`px-3 py-2 rounded-lg font-medium transition-all cursor-pointer bg-orange-500 hover:bg-orange-600 ${
              isActive("/contact") ? "ring-2 ring-white" : ""
            }`}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
