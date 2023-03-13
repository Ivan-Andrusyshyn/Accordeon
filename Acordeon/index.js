const liItem = document.querySelectorAll(".item_h2");
const itemText = document.querySelectorAll(".item_p");
liItem.forEach((el) => {
  el.addEventListener("click", addClassOnClick);
});

function addClassOnClick(evt) {
  const sibling = evt.target.nextElementSibling;
  sibling.classList.toggle("hidden");
}
