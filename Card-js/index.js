const title = document.querySelectorAll("#index");
const text = document.querySelectorAll(".item_p");
const h1 = document.querySelector(".a");
title.forEach((el) => {
  el.addEventListener("click", makeClick);
});
function makeClick(evt) {
  const textContent = evt.target.textContent;
  text.forEach((el) => {
    if (el.id !== textContent) {
      el.classList.add("hidden");
      return;
    }
    h1.classList.toggle("animate__swing");
    el.classList.remove("hidden");
  });
}
