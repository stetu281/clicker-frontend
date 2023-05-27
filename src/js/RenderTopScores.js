import { getData } from "./tools/fetch";

export const RenderTopScores = async () => {
  const list = document.querySelector(".topClickers");
  list.innerHTML = "";
  const scores = await getData("/scores/top");
  scores.forEach((score) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${score.playername}</span><span>${score.score}</span>`;
    list.appendChild(li);
  });
};
