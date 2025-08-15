const API_URL = "https://internship-finder-api.onrender.com/api/nearbyjobs";

export const getNearbyJobs = async (lat: number, lon: number) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(`${API_URL}?lat=${lat}&lon=${lon}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error("Failed to get nearby jobs");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Failed to fetch nearby jobs:", error);
    throw error;
  }
};
