"use client";
import LeftImage from "@/components/LeftImage/page";
import { FormEvent, useState } from "react";
import axios from "axios"; // Tambahkan import axios

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:4000/user/register", formData);
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
    <div className="flex h-screen">
      {/* Bagian Kiri */}
      <div className="w-2/4 bg-gray-100 flex items-center justify-center">
        <LeftImage />
      </div>
      {/* Bagian Kanan */}
      <div className="w-3/4 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-black">
            Buat <span className="text-red-600">Akun</span>
          </h2>
          <div className="text-gray-500 text-sm text-center mb-6">
            Mulai berbelanja merchandise dengan mudah
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                placeholder="Masukkan kata sandi anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="Masukkan nama anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="telepon" className="block text-sm font-medium text-gray-600">
                Nomor Telepon
              </label>
              <input
                id="telepon"
                type="text"
                placeholder="Masukkan nomor telepon anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
                value={formData.telepon}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-gray-600">
                Alamat
              </label>
              <input
                id="alamat"
                type="text"
                placeholder="Masukkan alamat anda"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none"
                value={formData.alamat}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
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