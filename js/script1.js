  // FILTER DROPDOWN (CATEGORIES PAGE)
function toggleFilter(header) {
  const currentDropdown = header.nextElementSibling;

  // Close other open dropdowns
  document.querySelectorAll(".filter-col .dropdown").forEach(drop => {
    if (drop !== currentDropdown) {
      drop.style.display = "none";
    }
  });

  // Toggle current dropdown
  currentDropdown.style.display =
    currentDropdown.style.display === "block" ? "none" : "block";
}

// Close filter dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".filter-col")) {
    document.querySelectorAll(".filter-col .dropdown").forEach(drop => {
      drop.style.display = "none";
    });
  }
});





// OPEN popup when clicking any Customize button
document.querySelectorAll(".custom").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("customPopup").style.display = "flex";
  });
});

// CLOSE popup
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("customPopup").style.display = "none";
});

// CLOSE when clicking outside
document.getElementById("customPopup").addEventListener("click", e => {
  if (e.target.id === "customPopup") {
    e.target.style.display = "none";
  }
});

// Upload preview
const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");

uploadBox.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  uploadBox.innerHTML = `<img src="${URL.createObjectURL(file)}" style="width:100%;height:100%;object-fit:cover;border-radius:14px">`;
});



  // Get the popup submit button specifically
  const popupSubmitBtn = document.querySelector('#customPopup .submit-btn');
  const customPopup = document.getElementById('customPopup');
  const closePopup = document.getElementById('closePopup');

  // Close popup when ✕ is clicked
  closePopup.addEventListener('click', () => {
    customPopup.style.display = 'none';
  });

  // Submit button click (popup only)
popupSubmitBtn.addEventListener('click', () => {
  alert(`Your customization details Updated Successfully!
Check Your Dashboard`);
  customPopup.style.display = 'none'; // close popup after alert
});
