"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import {
  getApplications,
  updateApplicationStatus,
  deleteApplication,
} from "../api/application";

const ApplicationPage = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [error, setError] = useState("");

  const fetchApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data.applications || []);
    } catch (err: any) {
      setError(err.message || "Failed to load applications");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      await updateApplicationStatus(id, status);
      fetchApplications();
    } catch (err: any) {
      alert(err.message || "Failed to update application");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteApplication(id);
      fetchApplications();
    } catch (err: any) {
      alert(err.message || "Failed to delete application");
    }
  };

  return (
    <div>
      <Header />
      <section className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-5">
          My Applications
        </h1>
        {error && <p className="text-red-600">{error}</p>}
        <div className="space-y-4">
          {applications.length > 0 ? (
            applications.map((app) => (
              <div key={app.id} className="border p-4 rounded shadow-sm">
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
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleUpdateStatus(app.id, "accepted")}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Accepted
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(app.id, "rejected")}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Rejected
                  </button>
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="bg-gray-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
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
