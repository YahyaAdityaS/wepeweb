import Image from 'next/image'
import Navbar from '@/components/Navbar/page'

export default function About() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
    <Navbar></Navbar>
      {/* Hero */}
      <section className="bg-red-50 py-40 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kenalan dengan <span className="text-red-500">WP MERCH</span>
            </h1>
            <p className="text-lg text-gray-700">
              WP MERCH adalah platform penjualan merchandise seperti kaos, gantungan kunci, dan stiker. Kami berkomitmen
              menyediakan produk berkualitas dengan harga yang nyaman di kantong.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/kaos.png"
              alt="Ilustrasi WP MERCH"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Visi & Misi</h2>
          <p className="text-gray-600">Mengapa kami hadir dan apa yang kami perjuangkan</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-red-500">Visi</h3>
            <p className="text-gray-600">
              Menjadi brand merchandise lokal yang dicintai, dengan produk unik dan kualitas yang bisa diandalkan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-red-500">Misi</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Menyediakan kaos, gantungan, dan stiker dengan desain menarik</li>
              <li>Menjaga kualitas bahan dan cetakan</li>
              <li>Memberikan harga terbaik bagi pelanggan</li>
              <li>Mendukung kreator lokal lewat kolaborasi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tim WP MERCH */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Tim WP MERCH</h2>
          <p className="text-gray-600">Orang-orang di balik produk favoritmu</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { name: 'Galih Nasasta Z.', role: 'Hustler', image: '/images/andi.jpg' },
            { name: 'Naufal Narayan C.B', role: 'Hipster', image: '/images/rina.jpg' },
            { name: 'Yahya Aditya S.', role: 'Hacker', image: '/images/bagus.jpg' },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 text-center group"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}