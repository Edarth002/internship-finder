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
  } catch (error) {}
};
