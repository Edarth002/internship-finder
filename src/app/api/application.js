// Function to getApplications
export const getApplication = async () => {
  try {
    const res = await fetch();
    const data = res.json;
    return data;
  } catch (error) {
    console.log("Failed to get applications because: ", error);
    throw error;
  }
};

//Function to create applications
//To be updated as it does not properly send correct data to the backend hence might throw a 403 error when called
export const createApplications = async () => {
  try {
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: String,
        userId: Int,
        title: String,
        company: String,
        location: String,
        url: String,
        status: String,
      }),
    });

    if (!res.ok) throw new Error("Failed to submit application");
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Failed to create application because: ", error);
    throw error;
  }
};
