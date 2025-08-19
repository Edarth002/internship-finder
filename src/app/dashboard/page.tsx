"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { getApplications } from "../api/application";
import { getProfile } from "../api/profile";

const Dashboard = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apps = await getApplications();
        setApplications(apps.applications || []);
        const prof = await getProfile();
        setProfile(prof.profile);
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <section className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-5">Dashboard</h1>
        {error && <p className="text-red-600">{error}</p>}

        {/* Profile Section */}
        {profile && (
          <div className="border p-4 rounded shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-2">My Profile</h2>
            <p>
              <b>Name:</b> {profile.fullname}
            </p>
            <p>
              <b>Email:</b> {profile.email}
            </p>
            <p>
              <b>Phone:</b> {profile.number}
            </p>
            <p>
              <b>School:</b> {profile.school}
            </p>
            <p>
              <b>Department:</b> {profile.department}
            </p>
            <p>
              <b>Industry:</b> {profile.industry}
            </p>
            <p>
              <b>State:</b> {profile.state}
            </p>
          </div>
        )}

        {/* Applications Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">My Applications</h2>
          {applications.length > 0 ? (
            applications.map((app) => (
              <div key={app.id} className="border p-4 rounded shadow-sm mb-2">
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

export default Dashboard;
