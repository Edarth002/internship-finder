const API_URL = "https://internship-finder-api.onrender.com/api/applications";

export const getApplications = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(API_URL, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      throw new Error("Failed to get applications");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Failed to get applications:", error);
    throw error;
  }
};

export const createApplication = async (applicationData: {
  title: string;
  company: string;
  location: string;
  url: string;
  status: string;
}) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(applicationData),
    });

    if (!res.ok) {
      throw new Error("Failed to create application");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Failed to create application:", error);
    throw error;
  }
};

export const updateApplicationStatus = async (
  applicationId: number,
  status: string
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(`${API_URL}/${applicationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      throw new Error("Failed to update application status");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Failed to update application status:", error);
    throw error;
  }
};
