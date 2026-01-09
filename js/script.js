
//profilejs
function toggleProfileMenu(){
    const menu = document.getElementById("profileMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* Close when clicking outside */
document.addEventListener("click", function(e){
    const profile = document.querySelector(".profile");
    const menu = document.getElementById("profileMenu");

    if(!profile.contains(e.target) && !menu.contains(e.target)){
        menu.style.display = "none";
    }
});


  const bellIcon = document.getElementById("bellIcon");
  const popup = document.getElementById("notificationPopup");
  const closePopup = document.getElementById("closePopup");

  bellIcon.addEventListener("click", () => {
    popup.classList.toggle("show");
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Close popup when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".bell-wrapper")) {
      popup.classList.remove("show");
    }
  });





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
 document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".wishlist i").forEach(heart => {
    heart.addEventListener("click", function (e) {
      e.stopPropagation();

      if (this.classList.contains("fa-regular")) {
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
      } else {
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
        this.style.color = "#000";
      }
    });
  });
});




//payment proceed
const proceedBtn = document.getElementById("proceedBtn");
const upiBox = document.getElementById("upiBox");
const successBox = document.getElementById("successBox");

proceedBtn.addEventListener("click", function () {
  upiBox.style.visibility = "hidden";
  successBox.style.display = "flex";
});





// FILTER DROPDOWN (FOR YELLOW FILTER BAR)
function toggleDropdown(id, header) {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  const dropdown = document.getElementById(id);
  dropdown.classList.add('active');
}

function applyFilter(button) {
  const dropdown = button.closest('.dropdown');
  const header = dropdown.closest('.filter-col').querySelector('.filter-header');
  const selected = dropdown.querySelector('input:checked');

  if (selected) {
    header.childNodes[0].nodeValue = selected.value + ' ';
  }

  dropdown.classList.remove('active');
}

//submit alertmsg
function submitCustomization() {
  // 1. Alert message
  alert("Customization details updated successfully!\nCheck your Dashboard");

  // 2. Close popup
  const popup = document.getElementById("customPopup");
  if (popup) {
    popup.style.display = "none";
  }

  // 3. Page stays the same automatically ✔
}
