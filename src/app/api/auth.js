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
    throw error;
  }
};

export const login = async () => {
  try {
    const res = await fetch(
      "https://internship-finder-api.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: String, password: String }),
      }
    );
    if (!res.ok) throw new Error("User does not exist or Invalid credentials");

    const data = res.json();

    localStorage.setItem("token", data.jwt);
    localStorage.setItem("user", data.user);
    console.log("jwt:", data.jwt);

    return { token: data.jwt, user: user.data };
  } catch (error) {
    console.log("Failed to login due to: ", error);
    throw error;
  }
};
