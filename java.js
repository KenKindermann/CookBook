const recipeList = document.getElementById("recipe-list");
const iframe = document.getElementById("iframe");
const liList = recipeList.querySelectorAll("li");
const shareButton = document.getElementById("share-btn");

liList.forEach((el) => {
  el.addEventListener("click", () => {
    iframe.src = el.getAttribute("path");
  });
});

console.log(shareButton);
shareButton.addEventListener("click", () => {
  alert(iframe.src);
});
