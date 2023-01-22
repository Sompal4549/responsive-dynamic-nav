function openMenu() {
  document.getElementById("backdrop").style.display = "block";
}
function closeMenu() {
  document.getElementById("backdrop").style.display = "none";
}

let modal = document.getElementById("backdrop");

window.onclick = function (event) {
  if (event.target == document.getElementById("backdrop")) {
    document.getElementById("backdrop").style.display = "none";
  }
};
