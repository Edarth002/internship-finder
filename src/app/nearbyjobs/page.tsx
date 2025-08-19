"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { getNearbyJobs } from "../api/nearbyjobs";
import { createApplication } from "../api/application";

const NearbyJobsPage = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getNearbyJobs();
        setJobs(data.jobs || []);
      } catch (err: any) {
        setError(err.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = async (job: any) => {
    try {
      await createApplication({
        title: job.title,
        company: job.company,
        location: job.location,
        url: job.url,
        status: "pending",
      });
      alert("Application submitted!");
    } catch (err: any) {
      alert(err.message || "Failed to apply");
    }
  };

  return (
    <div>
      <Header />
      <section className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-5">Nearby Jobs</h1>
        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <div className="space-y-4">
          {jobs.length > 0 ? (
            jobs.map((job, idx) => (
              <div key={idx} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{job.title}</h3>
                <p>
                  {job.company} — {job.location}
                </p>
                <a
                  href={job.url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Job
                </a>
                <button
                  onClick={() => handleApply(job)}
                  className="ml-4 bg-orange-600 text-white px-3 py-1 rounded"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p>No nearby jobs found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default NearbyJobsPage;
