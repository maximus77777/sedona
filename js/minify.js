const link=document.querySelector(".btn-info"),modal=document.querySelector(".modal"),form=modal.querySelector("form"),dateTo=modal.querySelector("[name=date-to]"),dateFrom=modal.querySelector("[name=date-from]");let isStorageSupport=!0,storage="";try{storage=localStorage.getItem("date")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal-show"),modal.classList.contains("modal-closeshow")?(modal.classList.remove("modal-closeshow"),modal.classList.add("modal-openshow")):(modal.classList.remove("modal-openshow"),modal.classList.add("modal-closeshow"))}),form.addEventListener("submit",function(e){e.preventDefault(),dateTo.value&&dateFrom.value?isStorageSupport&&(localStorage.setItem("date",dateTo.value),localStorage.setItem("date",dateFrom.value)):(modal.classList.remove("modal-error"),modal.offsetWidth=modal.offsetWidth,modal.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});