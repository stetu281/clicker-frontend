import { getData } from "./tools/fetch";

export const RenderStats = async () => {
  const { stats } = await getData("/stats");
  const sts = stats[0];
  document.querySelector(".totalClicks").innerText = sts.allTimeClicks;
  document.querySelector(".numClickers").innerText = sts.allTimePlayers;
  document.querySelector(".num").innerText = sts.lastClickNum;
  document.querySelector(".name").innerText = sts.lastClickName;
  document.querySelector(".date").innerText = sts.lastClickDate;
};
