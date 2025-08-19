"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/header";
import { register } from "../../api/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simple frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await register(formData.email, formData.password);
      setSuccess("Account created successfully!");
      setFormData({ email: "", password: "", confirmPassword: "" });
    } catch (err: any) {
      setError(err.message || "Signup failed");
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
            Sign Up to get Started
          </h1>

          <label className="mt-3 text-sm" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            className="outline-none text-gray-800 border border-gray-500 rounded-sm w-full py-2 px-2 mb-5 mt-1"
            type="email"
            name="email"
            id="email"
            required
          />

          <label className="mt-3 text-sm" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            value={formData.password}
            className="outline-none text-gray-800 border border-gray-500 rounded-sm w-full py-2 px-2 mt-1 mb-5"
            type="password"
            name="password"
            id="password"
            required
          />

          <label className="mt-3 text-sm" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            value={formData.confirmPassword}
            className="outline-none text-gray-800 border border-gray-500 rounded-sm w-full py-2 px-2 my-1"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="outline-none text-white bg-orange-600 rounded-sm w-full py-2 px-2 mt-7 hover:bg-orange-700 duration-500 cursor-pointer"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {error && <p className="text-red-600 mt-3">{error}</p>}
          {success && <p className="text-green-600 mt-3">{success}</p>}

          <p className="text-center text-sm mt-3">
            Already have an account with us?{" "}
            <Link
              href="/auth/login"
              className="text-orange-600 hover:text-orange-700 duration-500 cursor-pointer"
            >
              Login
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

export default SignUp;
