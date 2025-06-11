'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar/page'
import image from '@/public/images/image.png'

export default function Checkout() {
  const router = useRouter()
  const [size, setSize] = useState('M')
  const [payment, setPayment] = useState('cash')
  const [address, setAddress] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-24 max-w-6xl mx-auto pt-40">
        
        {/* Kiri: Gambar Produk */}
        <div className="flex justify-center items-center">
          <Image src={image} alt="Produk" width={300} height={300} className="rounded-xl" />
        </div>

        {/* Kanan: Form Checkout */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Checkout Produk</h2>
          
          <div>
            <label className="block text-gray-700 font-medium">Alamat Pengiriman</label>
            <textarea
              className="w-full border text-gray-800 border-gray-300 rounded-lg p-3 mt-1"
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Masukkan alamat pengiriman..."
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Ukuran</label>
            <select
              className="w-full border text-gray-800 border-gray-300 rounded-lg p-2"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Metode Pembayaran</label>
            <select
              className="w-full border text-gray-800 border-gray-300 rounded-lg p-2"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="cash">Cash</option>
              <option value="qris">QRIS</option>
            </select>
          </div>

          <button
            onClick={() => alert('Pemesanan berhasil')}
            className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 font-semibold"
          >
            Konfirmasi Pesanan
          </button>
        </div>
      </div>
    </div>
  )
}
