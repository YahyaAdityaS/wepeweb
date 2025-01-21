import Link from "next/link";
import Image from "next/image";
import PP from "@/public/images/Nolin.jpg"

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="w-full h-24 flex items-center justify-between px-12 bg-white text-black fixed top-0 left-0 z-[1]">
        {/* Logo Section */}
        <div className="font-semibold">
          <p className="text-2xl">WP Merch.</p>
        </div>
        {/* Menu Section */}
        <div className="flex gap-8 font-semibold">
          <Link href={"/"} className="hover:text-E4252C">
            Product
          </Link>
          <Link href={"/"} className="hover:text-E4252C">
            About Us
          </Link>
        </div>
        {/* Search Section */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="bg-gray-100 rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Cari"
          />
          {/* Cart Icon */}
          <button className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
          {/* Profile Picture */}
          <div className="w-10 h-10">
            <Image
              src={PP}
              alt="Profile Picture"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      {/* End Navbar */}
    </>
  );
}
