const link = document.querySelector(".btn-info");
const modal = document.querySelector(".modal");
const form = modal.querySelector("form");
const dateTo = modal.querySelector("[name=date-to]");
const dateFrom = modal.querySelector("[name=date-from]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("date");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");

  if (modal.classList.contains("modal-closeshow")) {
    
    modal.classList.remove("modal-closeshow");
    modal.classList.add("modal-openshow");
  } else {
    modal.classList.remove("modal-openshow");
    modal.classList.add("modal-closeshow");
  }
});

form.addEventListener("submit", function(evt)  {
  evt.preventDefault();
  if (!dateTo.value || !dateFrom.value) {
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else
  if (isStorageSupport) {
  localStorage.setItem("date", dateTo.value);
  localStorage.setItem("date", dateFrom.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});