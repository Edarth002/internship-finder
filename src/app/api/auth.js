export const register = async () => {
  try {
    const res = await fetch(
      "https://internship-finder-api.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: String, email: String, password: String }),
      }
    );
    if (!res.ok) {
      throw new Error("User already exists or Invalid registration parameters");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to register because: ", error);
    Error("Failed to register account");
  }
};

export const login = async () => {
  try {
    const res = await fetch(
      "https://internship-finder-api.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: 
      }
    );
  } catch (error) {}
};
