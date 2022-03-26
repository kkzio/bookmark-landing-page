window.addEventListener("load", () => {
  // Features
  const tabFeatures = document.getElementsByClassName("tab-features");
  const detailFeatures = document.getElementsByClassName("detail-feature");

  const activeFeatures = (features, selected) => {
    for (let i = 0; i < detailFeatures.length; i++) {
      detailFeatures[i].style.display = "none";
    }

    for (let i = 0; i < tabFeatures.length; i++) {
      tabFeatures[i].className = tabFeatures[i].className.replace(
        " tab-active",
        ""
      );
      tabFeatures[selected].classList.add("tab-active");
    }

    document.getElementById(features).style.display = "grid";
  };

  for (let i = 0; i < tabFeatures.length; i++) {
    tabFeatures[i].addEventListener("click", () => {
      activeFeatures(`feature-${i + 1}`, i);
    });

    if (i > 0) {
      detailFeatures[i].style.display = "none";
    } else {
      tabFeatures[i].classList.add("tab-active");
    }
  }

  //Faq
  const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // Mobile Menu
  const btnMenu = document.querySelector(".open-menu");
  const conatainerMenu = document.querySelector("#mobile-menu");
  const btnClose = document.querySelector(".close-menu");
  const nav = document.querySelector(".nav");

  const btnCLick = (btnName) => {
    btnName.addEventListener("click", () => {
      conatainerMenu.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.classList.toggle("active");
    });
  };

  btnCLick(btnMenu);
  btnCLick(btnClose);
});
