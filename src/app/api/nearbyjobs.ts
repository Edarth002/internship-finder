const API_URL = "https://internship-finder-api.onrender.com/api/nearbyjobs";

export const getNearbyJobs = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  const res = await fetch(API_URL, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Failed to fetch nearby jobs");
  return await res.json(); // { jobs }
};
