"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import { createProfile } from "../api/profile";

const Profile = () => {
  const [form, setForm] = useState({
    fullname: "",
    state: "",
    number: "",
    age: 20,
    department: "",
    school: "",
    industry: "",
  });
  const [steps, setSteps] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSteps = () => setSteps(!steps);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await createProfile(form);
      setSuccess("Profile created successfully!");
    } catch (err: any) {
      setError(err.message || "Profile creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {steps ? (
        <section className="flex items-center mx-auto justify-center md:flex-row flex-col-reverse pt-14 px-20">
          <form className="md:w-2/4">
            <h1 className="text-3xl text-center my-5 text-orange-600 font-bold">
              Personal Details
            </h1>
            <label className="mt-3 text-sm" htmlFor="fullname">
              Full Name
            </label>
            <input
              onChange={handleInput}
              value={form.fullname}
              name="fullname"
              id="fullname"
              className="outline-none border w-full py-2 px-2 mb-5"
            />
            <label className="mt-3 text-sm" htmlFor="state">
              State of Residence
            </label>
            <input
              onChange={handleInput}
              value={form.state}
              name="state"
              id="state"
              className="outline-none border w-full py-2 px-2 mb-5"
            />
            <label className="mt-3 text-sm" htmlFor="number">
              Phone Number
            </label>
            <input
              onChange={handleInput}
              value={form.number}
              name="number"
              id="number"
              className="outline-none border w-full py-2 px-2 mb-5"
            />
            <label className="mt-3 text-sm" htmlFor="age">
              Age
            </label>
            <input
              onChange={handleInput}
              value={form.age}
              name="age"
              id="age"
              type="number"
              className="outline-none border w-full py-2 px-2"
            />
            <input
              onClick={handleSteps}
              type="button"
              value="Next"
              className="bg-orange-600 text-white w-full py-2 mt-7 cursor-pointer"
            />
          </form>
          <div className="md:w-3/4">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={1000}
              height={1000}
            />
          </div>
        </section>
      ) : (
        <section className="flex items-center mx-auto justify-center md:flex-row flex-col-reverse pt-14 px-20">
          <form onSubmit={handleSubmit} className="md:w-2/4">
            <h1 className="text-3xl text-center my-5 text-orange-600 font-bold">
              Let us Find you a{" "}
              <span className="text-orange-400">Placement</span>
            </h1>
            <label className="mt-3 text-sm" htmlFor="department">
              Department
            </label>
            <input
              onChange={handleInput}
              value={form.department}
              name="department"
              id="department"
              className="outline-none border w-full py-2 px-2 mb-5"
            />
            <label className="mt-3 text-sm" htmlFor="school">
              School
            </label>
            <input
              onChange={handleInput}
              value={form.school}
              name="school"
              id="school"
              className="outline-none border w-full py-2 px-2 mb-5"
            />
            <label className="mt-3 text-sm" htmlFor="industry">
              Industry
            </label>
            <input
              onChange={handleInput}
              value={form.industry}
              name="industry"
              id="industry"
              className="outline-none border w-full py-2 px-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white w-full py-2 mt-7"
            >
              {loading ? "Saving..." : "Submit"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">{success}</p>}
            <p
              className="text-orange-800 mt-3 text-lg cursor-pointer"
              onClick={handleSteps}
            >
              Go back
            </p>
          </form>
          <div className="md:w-3/4">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={1000}
              height={1000}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
