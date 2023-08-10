const buttonMonthly = document.querySelector(".button-switch__monthly");
const buttonYearly = document.querySelector(".button-switch__yearly");

buttonMonthly.addEventListener("click", () => {
    console.log("Monthly", this);
    buttonYearly.classList.remove("button-switch--selected");
    buttonMonthly.classList.add("button-switch--selected");
});

buttonYearly.addEventListener("click", () => {
    console.log("Yearly");
    buttonMonthly.classList.remove("button-switch--selected");
    buttonYearly.classList.add("button-switch--selected");
});