// src/app/api/profile.ts
const API_URL = "https://internship-finder-api.onrender.com/api/profile";

export type ProfilePayload = {
  fullname: string;
  number: string;
  age: number;
  department: string;
  school: string;
  industry: string;
  state: string;
};

export const createProfile = async (profileData: ProfilePayload) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Failed to create profile");
  }

  return await res.json();
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  const res = await fetch(API_URL, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Failed to fetch profile");
  }

  return await res.json();
};
