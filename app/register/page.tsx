import LeftImage from "@/components/LeftImage/page";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Bagian Kiri: Merch Display */}
      <div className="w-2/4 bg-gray-100 flex items-center justify-center">
        <LeftImage></LeftImage>
      </div>
      {/* Bagian Kanan: Form Login */}
      <div className="w-3/4 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-black">
            Buat <span className="text-E4252C">Akun</span>
          </h2>
          <div className=" text-616161 text-sm text-center mb-11">
            Mulai berbelanja marchendise dengan mudah
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="text-616161 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-616161 block text-sm font-medium">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan kata sandi anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="nama" className="text-616161 block text-sm font-medium">
                Nama
              </label>
              <input
                id="nama"
                type="nama"
                placeholder="Masukkan nama anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="Nomor telepon" className="text-616161 block text-sm font-medium">
                Nomor Telepon
              </label>
              <input
                id="nama"
                type="nama"
                placeholder="Masukkan nomor telepon anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <div >
              <label htmlFor="alamat" className="text-616161 block text-sm font-medium">
                Alamat
              </label>
              <input
                id="alamat"
                type="alamat"
                placeholder="Masukkan alamat anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-E4252C text-white py-3 rounded-lg hover:bg-E4252C"
            >
              Buat akun
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}