export const errorHandling = (arr) => {
  const inputError = document.querySelector(".inputError");
  const errorList = document.querySelector(".errorList");

  inputError.classList.remove("hidden");
  arr.forEach((error) => {
    const li = document.createElement("li");
    li.textContent = error.msg;
    errorList.appendChild(li);
  });
};
