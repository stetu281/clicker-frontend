import { postScore, updateStats } from "./tools/fetch";
import { errorHandling } from "./tools/errorhandling";
import { RenderTopScores } from "./RenderTopScores";
import { RenderStats } from "./RenderStats";

export const ClickCount = async () => {
  const counterText = document.querySelector(".currentClicks");
  let counter = 0;
  let formData = {};
  const nameInput = document.querySelector(".nameInput");
  document.querySelector("#clickField").addEventListener("click", () => {
    counter++;
    counterText.innerText = counter;
  });

  document.querySelector(".submit").addEventListener("click", async () => {
    document.querySelector(".inputError").classList.add("hidden");
    document.querySelector(".errorList").innerHTML = "";

    if (counter < 20) {
      errorHandling([{ msg: "Please provide at least 20 clicks" }]);
    } else {
      formData.playername = nameInput.value;
      formData.score = counter;
      const res = await postScore(formData);
      if (res === "success") {
        updateStats(formData);

        //add loader
        counter = 0;
        counterText.innerText = counter;
        setTimeout(() => {
          RenderTopScores();
          RenderStats();
        }, 1000);
      }
    }
  });
};
