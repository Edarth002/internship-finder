"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import { login } from "../../api/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(form.email, form.password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex items-center mx-auto justify-center md:flex-row flex-col-reverse pt-14 px-20">
        <form onSubmit={handleSubmit} className="md:w-2/4">
          <h1 className="text-3xl text-center my-5 text-orange-600 font-bold">
            Welcome Back
          </h1>
          <label className="mt-3 text-sm" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            value={form.email}
            className="outline-none text-gray-800 border border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1"
            type="email"
            name="email"
            id="email"
          />
          <label className="mt-3 text-sm" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            value={form.password}
            className="outline-none text-gray-800 border border-gray-500 rounded-sm w-full py-2 px-2 my-1"
            type="password"
            name="password"
            id="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="outline-none text-white bg-orange-600 rounded-sm w-full py-2 px-2 mt-7 hover:bg-orange-700 duration-500 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <p className="text-center text-sm mt-3">
            No account yet?{" "}
            <Link
              href="/auth/signup"
              className="text-orange-600 hover:text-orange-700 duration-500"
            >
              Signup
            </Link>
          </p>
        </form>
        <div className="md:w-3/4">
          <Image src="/hero.png" alt="Hero Image" width={1000} height={1000} />
        </div>
      </section>
    </div>
  );
};

export default Login;
