import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/page";
import image from "@/public/images/image.png";
import imagea from "@/public/images/image.png";


export default function Product() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
        <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-8 pt-40">
        {/* KIRI: Gambar Produk */}
        <div className="flex flex-col items-center">
          <Image src={image} alt="jersey" className="size-80 h-auto"></Image>
          <div className="flex space-x-4 mt-4">
          <Image src={image} alt="jersey" className="size-3/6"></Image>
          <Image src={imagea} alt="jersey" className="size-3/6"></Image>
          </div>
        </div>

        {/* KANAN: Info Produk */}
        <div className="flex flex-col justify-center pr-28">
          <h2 className="text-red-600 text-xl font-bold">
            Short Sleeve Polo Shirt
          </h2>
          <p className="text-sm text-gray-500 mb-2">Baju</p>
          <p className="text-gray-700 mb-1">
            Kemeja Polo Lengan Pendek Pria Musim Semi/Musim Panas Santai dan
            Modis Bergaya Hong Kong
          </p>
          <span className="text-red-500 text-sm mb-4">Lebih banyak...</span>

          <p className="text-3xl font-bold text-black mb-2">Rp. 213.591,49</p>
          <p className="text-sm text-gray-600 mb-4">Stok : 67</p>

          {/* Counter */}
          <div className="flex items-center mb-6">
            <button className="border p-2 rounded text-xl text-black border-rose-500">−</button>
            <span className="px-4 text-lg font-bold text-black">1</span>
            <button className="bg-red-500 text-white p-2 rounded text-xl">
              +
            </button>
          </div>

          {/* Tombol */}
          <div className="flex flex-col space-y-2">
            <button className="bg-red-500 text-white py-3 rounded-xl font-semibold">
              Beli Sekarang
            </button>
            <button className="border border-black py-3 rounded-xl font-semibold text-rose-600">
              Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}