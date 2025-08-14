export const getNearbyJobs = async () => {
  try {
    const res = await fetch();
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Failed to get nearbyjobs because: ", error);
    throw error;
  }
};
