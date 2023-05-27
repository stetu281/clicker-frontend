import { errorHandling } from "./errorhandling";
const url = "http://localhost:8888";

export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${url}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.error}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const postScore = async (data) => {
  document.querySelector(".inputError").classList.add("hide");
  document.querySelector(".errorList").innerHTML = "";

  const response = await fetch(`${url}/scores`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const res = await response.json();

  if (response.status !== 200) {
    errorHandling(await res.errors);
  } else {
    document.querySelector(".nameInput").value = "";
    return await res;
  }
};

export const updateStats = async (data) => {
  const { stats } = await getData("/stats");

  const today = new Date().toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const newStats = {
    id: 1,
    allTimeClicks: (stats[0].allTimeClicks += data.score),
    allTimePlayers: stats[0].allTimePlayers + 1,
    lastClickDate: today,
    lastClickName: data.playername,
    lastClickNum: data.score,
  };
  console.log(newStats);

  try {
    const response = await fetch(`${url}/stats`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStats),
    });
  } catch (e) {
    console.log(e);
  }
};
