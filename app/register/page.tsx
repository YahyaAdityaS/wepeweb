"use client"
import LeftImage from "@/components/LeftImage/page";
import { FormEvent, useState, useEffect } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nama: "",
    telepon: "",
    alamat: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("user/register", formData);
      setSuccess("Pendaftaran berhasil! Silakan login.");
      setFormData({
        email: "",
        password: "",
        nama: "",
        telepon: "",
        alamat: "",
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-dvh">
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
            <div>
              <label
                htmlFor="email"
                className="text-616161 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-616161 block text-sm font-medium"
              >
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan kata sandi anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="nama"
                className="text-616161 block text-sm font-medium"
              >
                Nama
              </label>
              <input
                id="nama"
                type="nama"
                placeholder="Masukkan nama anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="Nomor telepon"
                className="text-616161 block text-sm font-medium"
              >
                Nomor Telepon
              </label>
              <input
                id="telepon"
                type="telepon"
                placeholder="Masukkan nomor telepon anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
                value={formData.telepon}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="text-616161 block text-sm font-medium"
              >
                Alamat
              </label>
              <input
                id="alamat"
                type="alamat"
                placeholder="Masukkan alamat anda"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
                value={formData.alamat}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-E4252C hover:bg-E4252C"
              }`}
              disabled={loading}
            >
              {loading ? "Mendaftar..." : "Buat akun"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
