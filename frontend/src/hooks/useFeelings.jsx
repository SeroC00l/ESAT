const API_URL = "http://localhost:3000/api";

export const sendFeelingData = async (feelingData, token) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(feelingData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("data saved");
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};