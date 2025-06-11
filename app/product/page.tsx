"use client"

import Image from 'next/image'
import Navbar from '@/components/Navbar/page'
import { useRouter } from 'next/navigation'

const products = [
  {
    id: 1,
    name: 'Beach K Cream',
    price: 80000,
    image: '/images/jersey1.png',
  },
  {
    id: 2,
    name: 'Beach K Cream',
    price: 80000,
    image: '/images/jersey1.png',
  },
  {
    id: 3,
    name: 'Beach K Cream',
    price: 80000,
    image: '/images/jersey1.png',
  },
  {
    id: 4,
    name: 'Beach K Cream',
    price: 80000,
    image: '/images/jersey1.png',
  },
  {
    id: 5,
    name: 'Beach K Cream',
    price: 80000,
    image: '/images/jersey1.png',
  },
]

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Produk Terbaru
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-red-500 font-bold mt-1 mb-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                        onClick={() => router.push("/pbackup")}>
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}