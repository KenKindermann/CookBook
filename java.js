
const recipeList = document.getElementById("recipe-list")
const iframe = document.getElementById("iframe")
const liList = recipeList.querySelectorAll("li")

liList.forEach((el) => {el.addEventListener("click", () => {
    iframe.src = el.getAttribute("path")
})})


