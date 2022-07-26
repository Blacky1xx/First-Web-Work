function showlist() {
  var cardlist = document.getElementById("cardlist");
  var button = document.querySelector(".showlist-button button");
  if (cardlist.classList.contains("row-cols-lg-3")) {
    button.textContent = "Show grid";
    cardlist.classList.remove("row-cols-lg-3");
    cardlist.classList.add("row-cols-lg-1");
  } else {
    button.textContent = "Show list";
    cardlist.classList.remove("row-cols-lg-1");
    cardlist.classList.add("row-cols-lg-3");
  }
}
