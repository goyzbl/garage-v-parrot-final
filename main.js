window.addEventListener("load", function () {
  console.log(
    "Cette fonction est exécutée une fois quand la page est chargée."
  );
});
// Menu BURGER //
const btnMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".header");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active-menu");
});

const allLinks = document.querySelectorAll("nav");

allLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    menu.classList.toggle("active-menu");
  });
});
// Form-modal

      document.addEventListener('DOMContentLoaded', function () {
        const formOpenBtn = document.querySelector("#form-open"),
          formContainer = document.querySelector(".form_container"),
          formCloseBtn = document.querySelector(".form_close"),
          signupBtn = document.querySelector("#signup"),
          loginBtn = document.querySelector("#login"),
          pwShowHide = document.querySelectorAll(".pw_hide");

        formOpenBtn.addEventListener("click", () => formContainer.classList.add("show"));
        formCloseBtn.addEventListener("click", () => formContainer.classList.remove("show"));
        pwShowHide.forEach((icon) => {
          icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input");
            if (getPwInput.type === "password") {
              getPwInput.type = "text";
              icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
              getPwInput.type = "password";
              icon.classList.replace("uil-eye", "uil-eye-slash");
            }
          });
        });
        signupBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formContainer.classList.add("active");
        });
        loginBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formContainer.classList.remove("active");
        });
      });




window.onload = () => {
  // On va chercher toutes les étoiles
  const stars = document.querySelectorAll(".la-star");

  // On va chercher l'input
  const note = document.querySelector("#note");

  // On boucle sur les étoiles pour le ajouter des écouteurs d'évènements
  for (star of stars) {
    // On écoute le survol
    star.addEventListener("mouseover", function () {
      resetStars();
      this.style.color = "orange";
      this.classList.add("las");
      this.classList.remove("lar");
      // L'élément précédent dans le DOM (de même niveau, balise soeur)
      let previousStar = this.previousElementSibling;

      while (previousStar) {
        // On passe l'étoile qui précède en rouge
        previousStar.style.color = "orange";
        previousStar.classList.add("las");
        previousStar.classList.remove("lar");
        // On récupère l'étoile qui la précède
        previousStar = previousStar.previousElementSibling;
      }
    });

    // On écoute le clic
    star.addEventListener("click", function () {
      note.value = this.dataset.value;
    });

    star.addEventListener("mouseout", function () {
      resetStars(note.value);
    });
  }

  /**
   * Reset des étoiles en vérifiant la note dans l'input caché
   * @param {number} note
   */
  function resetStars(note = 0) {
    for (star of stars) {
      if (star.dataset.value > note) {
        star.style.color = "orange";
        star.classList.add("lar");
        star.classList.remove("las");
      } else {
        star.style.color = "orange";
        star.classList.add("las");
        star.classList.remove("lar");
      }
    }
  }
};
function openModal(car) {
  document.getElementById('modalTitle').innerText = car.title;
  document.getElementById('modalImage').src = car.main_image;
  document.getElementById('modalDesc').innerText = "Description: " + (car.description || 'Non disponible');
  document.getElementById('modalMileage').innerText = "Kilométrage : " + car.mileage + " km";
  document.getElementById('modalYear').innerText = "Année : " + car.year;
  document.getElementById('modalPrice').innerText = "Prix : " + car.price + " €";
  document.getElementById('modal-container').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-container').classList.remove('active');
}

function purchaseCar() {
  alert("Fonction d'achat en cours de développement.");
}

