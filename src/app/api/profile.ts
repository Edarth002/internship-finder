const API_URL = "https://internship-finder-api.onrender.com/api/auth";

export const createProfile = async (profileData: {
  fullname: string;
  state: string;
  number: string;
  age: number;
  department: string;
  school: string;
  industry: string;
}) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(`${API_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!res.ok) {
      throw new Error("Failed to register profile");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Profile creation failed:", error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch profile");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Get profile failed:", error);
    throw error;
  }
};
