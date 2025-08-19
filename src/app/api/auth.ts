const API_URL = "https://internship-finder-api.onrender.com/api/auth";

export const register = async (email: string, password: string) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("User already exists or invalid registration parameters");
    }

    return await res.json();
  } catch (error: any) {
    console.error("Failed to register:", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("User does not exist or invalid credentials");
    }

    const data = await res.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.alreadyExistingUser));

    return { token: data.token, user: data.alreadyExistingUser };
  } catch (error: any) {
    console.error("Failed to login:", error);
    throw error;
  }
};
