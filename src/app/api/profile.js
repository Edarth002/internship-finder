export const profile = async () => {
  try {
    const res = await fetch(
      "https://internship-finder-api.onrender.com/api/auth/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: String,
          state: String,
          number: String,
          age: Number,
          department: String,
          school: String,
          industry: String,
        }),
      }
    );
    if (!res.ok)
      throw new Error("Failed to register profile, try registering again");

    const data = res.json();
    return data;
  } catch (error) {
    console.log("You could not register profile because: ", error);
    throw error;
  }
};
