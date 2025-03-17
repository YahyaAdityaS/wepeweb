"use client";
import { BASE_API_URL } from "@/global";
import { storeCookie } from "@/lib/client-cookie";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LeftImage from "@/components/LeftImage/page";

interface loginResponse {
  status: boolean;
  logged: boolean;
  data: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  message: string;
  token: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault(); //agar datannya tidak hilang ketika submit
      const url = `${BASE_API_URL}/user/login`;
      const payload = JSON.stringify({ email: email, password });

      const { data } = await axios.post<loginResponse>(url, payload, {
        headers: { "Content-Type": "application/json" },
      });
      if (data.logged == true) {
        toast(data.message, {
          hideProgressBar: true,
          containerId: "toastLogin",
          type: "success",
          autoClose: 2000,
        });
        storeCookie("token", data.token);
        storeCookie("id", data.data.id);
        storeCookie("name", data.data.name);
        storeCookie("role", data.data.role);
        let role = data.data.role;
        if (role == "CUSTOMER") {
          setTimeout(() => router.replace(`/dashboard`), 1000);
        }
        if (role == "ADMIN") {
          setTimeout(() => router.replace(`/admin`), 1000);
        }
      } else
        toast(data.message, {
          hideProgressBar: true,
          containerId: `toastLogin`,
          type: "warning",
        });
    } catch (error) {
      console.error(error);
      toast(`Something wrong`, {
        hideProgressBar: true,
        containerId: `toastLogin`,
        type: "error",
      });
    }
  };
  
  return (
    <div className="flex h-dvh">
      <ToastContainer containerId={`toastLogin`} />
      {/* Bagian Kiri: Merch Display */}
      <div className="w-2/4 bg-gray-100 flex items-center justify-center">
        <LeftImage></LeftImage>
      </div>
      {/* Bagian Kanan: Form Login */}
      <div className="w-3/4 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-black">
            Selamat <span className="text-E4252C">Datang</span>
          </h2>
          <div className=" text-616161 text-sm text-center mb-11">
            Mulai berbelanja marchendise dengan mudah
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-616161 block text-sm font-medium"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id={email}
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-F6F7F9 text-616161 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-616161 block text-sm font-medium rounded-lg"
              >
                Kata Sandi
              </label>
              <div className="flex rounded-r-lg">
                <input
                  id="password"
                  type={showPassword ? "text" : `password`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="w-full px-4 py-2 bg-F6F7F9 rounded-l-lg text-616161 focus:outline-none"
                />
                <div
                  className="cursor-pointer bg-primary p-3 bg-E4252C rounded-r-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <a href="#" className="text-E4252C hover:underline">
                Lupa kata sandi?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-E4252C text-white py-2 rounded-lg hover:bg-E4252C"
            >
              Masuk
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-616161">
            Tidak mempunyai akun?{" "}
            <a href="/register" className="text-E4252C hover:underline">
              Buat akun
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
