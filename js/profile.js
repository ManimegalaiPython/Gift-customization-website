document.addEventListener("DOMContentLoaded", function () {

  /* ================= LOGIN POPUP ================= */
  const overlay = document.getElementById("authOverlay");
  const loginPopup = document.getElementById("loginPopup");
  const signupPopup = document.getElementById("signupPopup");
  const registerBtn = document.querySelector(".btn-register");

  if (overlay && loginPopup && signupPopup && registerBtn) {
    registerBtn.addEventListener("click", () => {
      overlay.style.display = "flex";
      loginPopup.style.display = "block";
      signupPopup.style.display = "none";
    });

    window.closeAuth = function () {
      overlay.style.display = "none";
    };

    window.openSignup = function () {
      loginPopup.style.display = "none";
      signupPopup.style.display = "block";
    };

    window.openLogin = function () {
      signupPopup.style.display = "none";
      loginPopup.style.display = "block";
    };
  }

  /* ================= AUTO TEXT SWITCH ================= */
  const title = document.getElementById("titleText");

  if (title) {
    const text1 = `
      OFF SEASON
      <span class="highlight">COLLECTIONS</span>
      GET <span class="discount">30%</span>
    `;

    const text2 = `
      SEASON
      <span class="highlight">COLLECTIONS</span>
      GET <span class="discount">30%</span>
    `;

    let toggle = false;

    setInterval(() => {
      title.innerHTML = toggle ? text1 : text2;
      toggle = !toggle;
    }, 1000);
  }

  /* ================= PROFILE MENU ================= */
  const profile = document.querySelector(".profile");
  const profileMenu = document.getElementById("profileMenu");

  if (profile && profileMenu) {
    window.toggleProfileMenu = function () {
      profileMenu.style.display =
        profileMenu.style.display === "block" ? "none" : "block";
    };

    document.addEventListener("click", function (e) {
      if (!profile.contains(e.target) && !profileMenu.contains(e.target)) {
        profileMenu.style.display = "none";
      }
    });
  }

  /* ================= BELL NOTIFICATION ================= */
  const bellIcon = document.getElementById("bellIcon");
  const bellPopup = document.getElementById("notificationPopup");
  const closePopup = document.getElementById("closePopup");

  if (bellIcon && bellPopup && closePopup) {
    bellIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      bellPopup.classList.toggle("show");
    });

    closePopup.addEventListener("click", function () {
      bellPopup.classList.remove("show");
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".bell-wrapper")) {
        bellPopup.classList.remove("show");
      }
    });
  }

});
