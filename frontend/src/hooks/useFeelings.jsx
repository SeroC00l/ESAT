const API_URL = "http://192.168.77.10:3000/api";

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
      //console.log("data saved");
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUniqueSupervisors = async (token) => {
  try {
    const response = await fetch(`${API_URL}/supervisors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
