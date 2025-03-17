import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import jersey from "@/public/images/jersey.png";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh bg-white">
      {/* Content */}
      <div className="mt-28 ml-28 flex-grow px-16">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4  text-black">
              Selamat datang di
              <div className="text-E4252C">WP MERCH</div>
            </h1>
            <div className="text-gray-600">
              Dapatkan merchandise keren dengan desain unik yang bikin kamu{" "}
              <br/> beda. Dari kaos, gelang, hingga aksesoris, semua ada di
              sini! <br/> Ekspresikan dirimu sekarang!
            </div>
            <div className="mt-7">
              <a href="/login">
              <button
                type="submit"
                className="w-40 h-12 bg-E4252C text-white py-2 rounded-2xl hover:bg-E4252C"
              >
                Ayo mulai
              </button>
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <Image src={jersey} alt="jersey" className="size-4/6"></Image>
          </div>
        </div>
      </div>
    </div>
  )};