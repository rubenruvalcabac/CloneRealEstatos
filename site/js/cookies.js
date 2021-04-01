const closeButton = document.getElementById("cookies__closeButton");
closeButton.addEventListener("click", function (e) {
  e.preventDefault();
  const parent = document.getElementById("cookies");
  parent.classList.toggle("hidden");
});
