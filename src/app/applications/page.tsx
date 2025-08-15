"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { createApplication, getApplications } from "../api/application";

const ApplicationPage = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    url: "",
    status: "pending",
  });

  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch applications on page load
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getApplications();
        setApplications(data);
      } catch (err: any) {
        setError(err.message || "Failed to load applications");
      }
    };
    fetchApplications();
  }, []);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await createApplication(form);
      setSuccess("Application submitted successfully!");
      // Refresh list
      const updated = await getApplications();
      setApplications(updated);
      setForm({
        title: "",
        company: "",
        location: "",
        url: "",
        status: "pending",
      });
    } catch (err: any) {
      setError(err.message || "Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Application Form */}
      <section className="pt-14 px-8 max-w-2xl mx-auto">
        <h1 className="text-3xl text-center my-5 text-orange-600 font-bold">
          Submit a New Application
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInput}
            placeholder="Job Title"
            className="border p-2 w-full mb-3"
            required
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleInput}
            placeholder="Company"
            className="border p-2 w-full mb-3"
            required
          />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleInput}
            placeholder="Location"
            className="border p-2 w-full mb-3"
            required
          />
          <input
            type="url"
            name="url"
            value={form.url}
            onChange={handleInput}
            placeholder="Application Link"
            className="border p-2 w-full mb-3"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleInput}
            className="border p-2 w-full mb-3"
          >
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 text-white px-4 py-2 rounded w-full"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </section>

      {/* Application History */}
      <section className="pt-14 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          My Applications
        </h2>
        <div className="space-y-4">
          {applications.length > 0 ? (
            applications.map((app, index) => (
              <div key={index} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{app.title}</h3>
                <p>
                  {app.company} — {app.location}
                </p>
                <p>Status: {app.status}</p>
                <a
                  href={app.url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Job
                </a>
              </div>
            ))
          ) : (
            <p>No applications yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage;
