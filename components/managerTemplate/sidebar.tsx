"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import MenuItem from "./menuItem";
import Logo from "../../public/images/gantungan.png";
import Profile from "../../public/images/gantungan.png";
import Cookies from "js-cookie";

type MenuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};

type ManagerProp = {
  children: ReactNode;
  id: string;
  title: string;
  menuList: MenuType[];
};



const Sidebar = ({ children, id, title, menuList }: ManagerProp) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const name = Cookies.get("name")
    if (name) {
      setUserName(name);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full min-h-dvh bg-slate-50">
      {/* Header section */}
      <header className="flex justify-between items-center p-4 mb-0 bg-sky-600 shadow-md">
        <div className="flex gap-2">
          <button onClick={() => setIsShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <h1 className="font-bold text-xl text-white">{title}</h1>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white"
          >
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
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <span className="font-bold">Logout</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                onClick={() => {
                  // Hapus JWT dari cookies
                  Cookies.remove("name"); // Ganti 'jwt' dengan nama cookie Anda
                  Cookies.remove("id");
                  Cookies.remove("role");
                  Cookies.remove("token");
                  // Redirect ke halaman login
                  window.location.href = "http://localhost:3000/login";
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </header>
      {/* end header section */}
      {/* content section */}
      <div className="p-4">{children}</div>
      {/* end content section */}
      {/* Sidebar section */}
      <div
        className={`flex flex-col w-2/3 md:w-1/2 lg:w-1/4 h-full fixed top-0 right-full transition-transform z-50 bg-sky-600 border-r border-primary ${
          isShow ? "translate-x-full" : ""
        }`}
      >
        {/* Close button */}
        <div className="ml-auto p-2">
          <button onClick={() => setIsShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        {/* End close button */}
        {/* Logo section */}
        <div className="mb-3 w-full flex justify-center">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-white-500">Fooder</h1>
          </div>
        </div>
        {/* End logo section */}
        {/* User section */}
        <div className="w-full mt-10 mb-6 bg-primary text-white p-3 flex gap-2 items-center">
          <Image
            src={Profile}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm font-semibold">
            {userName}
          </div>
        </div>
        {/* End user section */}
        {/* Menu section */}
        <div className="w-full p-2 overflow-y-auto">
          <div className="px-5">
            {menuList.map((menu, index) => (
              <MenuItem
                key={`keyMenu${index}`}
                icon={menu.icon}
                label={menu.label}
                path={menu.path}
                active={menu.id === id}
              />
            ))}
          </div>
        </div>
        {/* End menu section */}
      </div>
      {/* End sidebar section */}
    </div>
  );
};

export default Sidebar;
