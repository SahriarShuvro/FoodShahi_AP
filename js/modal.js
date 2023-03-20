let paySalaryModal = document.getElementById("paySalaryModal");
let paySalaryModalOpen = document.getElementById("paySalaryModalOpen");
let paySalaryModalClose = document.getElementById("paySalaryModalClose");
paySalaryModalOpen.addEventListener("click", function () {
  paySalaryModal.classList.add("paySalaryModalActive");
});
paySalaryModalClose.addEventListener("click", function () {
  paySalaryModal.classList.remove("paySalaryModalActive");
});
