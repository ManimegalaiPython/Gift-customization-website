document.addEventListener("DOMContentLoaded", function () {

  // OPEN popup (for ALL 12 buttons)
  document.querySelectorAll(".custom").forEach(button => {
    button.addEventListener("click", function () {
      document.getElementById("customPopup").style.display = "flex";
    });
  });

  // CLOSE popup (X button)
  document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("customPopup").style.display = "none";
  });

  // CLOSE when clicking outside popup
  document.getElementById("customPopup").addEventListener("click", function (e) {
    if (e.target.id === "customPopup") {
      this.style.display = "none";
    }
  });

});




const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");

uploadBox.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  // show image preview inside upload box
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.borderRadius = "20px";

  uploadBox.innerHTML = ""; // remove icon
  uploadBox.appendChild(img);
});


  const submitBtn = document.getElementById("submitBtn");
  const formSection = document.getElementById("formSection");
  const successSection = document.getElementById("successSection");

  submitBtn.addEventListener("click", function () {
    formSection.style.display = "none";
    successSection.style.display = "block";
  });



  //heart color change
  document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active") ? "♥" : "♡";
  });
});


