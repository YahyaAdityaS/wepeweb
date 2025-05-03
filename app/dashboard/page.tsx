import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/page";
import Search from "./search";
import { IMenu } from "../types";
import { getCookies } from "@/lib/server-cookie";
import { BASE_API_URL, BASE_IMAGE_PRODUK } from "@/global";

import jersey from "@/public/images/jersey.png";
import jersey1 from "@/public/images/jersey1.png";
import kaos from "@/public/images/kaos.png";
import gantungan from "@/public/images/gantungan.png";
import stiker from "@/public/images/stiker.png";
import Ig from "@/public/images/instagram.png";
import Wa from "@/public/images/whatsapp.png";
import { get } from "@/lib/api-bridge";

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

interface MenuResponse {
  status: boolean;
  data: {
    status: boolean;
    data: IMenu[];
    message: string;
  };
}

const getMenu = async (search: string): Promise<IMenu[]> => {
  try {
    const TOKEN = await getCookies("token");
    const url = `${BASE_API_URL}/menu?search=${search}`;
    const response = await get(url, TOKEN); // Jangan pakai `as MenuResponse` agar bisa validasi manual

    if (
      response &&
      typeof response === "object" &&
      "data" in response &&
      response.data &&
      typeof response.data === "object" &&
      "data" in response.data &&
      Array.isArray(response.data.data)
    ) {
      return response.data.data;
    }

    console.warn("Unexpected response structure:", JSON.stringify(response));
    return [];
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
};


const Home = async ({ searchParams, }: { searchParams: { [key: string]: string | string[] | undefined };}) => {

  const search = searchParams.search ? searchParams.search.toString() : ``;
  const menu: IMenu[] = await getMenu(search);
  
  return (
    <div className="flex flex-col h-full bg-white">
      <Navbar></Navbar>
      {/* Content */}
      <div className="mt-28 ml-28 flex-grow px-16">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4  text-black">
              Ekspresikan dirimu <br/>
              dengan marchendise
              <div className="text-E4252C">KEREN!!!</div>
            </h1>
            <div className="text-gray-600">
              Dapatkan merchandise keren dengan desain unik yang bikin kamu{" "}
              <br/> beda. Dari kaos, gelang, hingga aksesoris, semua ada di
              sini! <br/> Ekspresikan dirimu sekarang!
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="w-40 h-12 bg-E4252C text-white py-2 rounded-2xl hover:bg-BC2B30"
              >
                Lebih banyak
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <Image src={jersey} alt="jersey" className="size-4/6"></Image>
          </div>
        </div>
        {/* Tambahkan konten lain di sini */}
        <div className="flex flex-col justify-center items-center mt-40 -ml-28">
          <div className="text-4xl text-black font-semibold">
            Produk <span className="text-E4252C">Terbaik</span> Kami
          </div>
          <div className="flex mt-3 text-gray-600 items-center">
            Berbelanja adalah hobi yang menyenangkan, terkadang merepotkan
          </div>
        </div>
        {/* Item */}
        <div className="flex mt-12 rounded-full justify-center gap-x-16 items-center">
          <div className="max-w-60 bg-transparent justify-center items-center">
            {/* Gambar */}
            <div className="w-full h-64 relative">
              <Image
                src={jersey1}
                alt="Beach K Cream"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">Beach K Cream</h2>
              <div className="text-gray-600">Kaos</div>
              <div className="text-lg font-semibold text-black mt-1">
                Rp. 80.000
              </div>
            </div>
          </div>
          <div className="max-w-60 bg-transparent rounded-xl">
            {/* Gambar */}
            <div className="w-full h-64 relative">
              <Image
                src={jersey1}
                alt="Beach K Cream"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">Beach K Cream</h2>
              <div className="text-gray-600">Kaos</div>
              <div className="text-lg font-semibold text-black mt-1">
                Rp. 80.000
              </div>
            </div>
          </div>
          <div className="max-w-60 bg-transparent rounded-xl">
            {/* Gambar */}
            <div className="w-full h-64 relative">
              <Image
                src={jersey1}
                alt="Beach K Cream"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">Beach K Cream</h2>
              <div className="text-gray-600">Kaos</div>
              <div className="text-lg font-semibold text-black mt-1">
                Rp. 80.000
              </div>
            </div>
          </div>
          <div className="max-w-60 bg-transparent rounded-xl">
            {/* Gambar */}
            <div className="w-full h-64 relative">
              <Image
                src={jersey1}
                alt="Beach K Cream"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">Beach K Cream</h2>
              <div className="text-gray-600">Kaos</div>
              <div className="text-lg font-semibold text-black mt-1">
                Rp. 80.000
              </div>
            </div>
          </div>
          <div className="max-w-60 bg-transparent">
            {/* Gambar */}
            <div className="w-full h-64 relative">
              <Image
                src={jersey1}
                alt="Beach K Cream"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">Beach K Cream</h2>
              <div className="text-gray-600">Kaos</div>
              <div className="text-lg font-semibold text-black mt-1">
                Rp. 80.000
              </div>
            </div>
          </div>
        </div>
        {/*kotak*/}
        <div className="flex flex-col justify-center items-center mt-40 -ml-28">
          <div className="text-4xl text-black font-semibold">
            Berbagai Macam <div className="text-E4252C pl-6">Produk Kami</div>
          </div>
          <div className="flex mt-3 text-gray-600 items-center">
            Ini adalah berbagai macam produk kami, dari kaos, stiker, gantungan
          </div>
          <div className="grid grid-cols-3 gap-1 mt-12 size-3/4">
            <div className="col-span-2">
              <Image src={kaos} alt="kaos"></Image>
            </div>
            <div className="felx items-center h-40">
              <Image src={gantungan} alt="gantungan"></Image>
            </div>
            <div className="col-span-3">
              <Image src={stiker} alt="stiker"></Image>
            </div>
          </div>
        </div>
        <div className="mt-36">
          <div className="text-4xl text-black font-semibold ">WP Merch.</div>
          <div className="mt-5 text-gray-600">
            WP MERCH adalah platform penjualan merchandise yang <br />
            berupa kaos, gantungan dan stiker. WP MERCH ingin <br />
            menyediakan barang dengan kualitas yang baik dan <br />
            harga yang nyaman di kantong.
          </div>
        </div>
        <div className="flex gap-x-4 mb-20">
          <a href="https://www.instagram.com/wepe_merch/">
            <Image src={Ig} alt="ig" className="size-10 mt-3"></Image>
          </a>
          <a href="">
            <Image src={Wa} alt="wa" className="size-10 mt-3"></Image>
          </a>
        </div>
      </div>
      <footer className="bg-E4252C text-white py-4 mt-14">
        <div className="container mx-auto text-center">
          <div>Copyright @ by WP MERCH. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;