
// PREMIER ÉVÉNEMENT : effet hover qui déclenche la lecture de la video sur la page passion

let video = document.getElementById('video-hover');

    // Fonction pour vérifier la largeur de l'écran
function isSmallScreen() {
  return window.innerWidth <= 768;
}

if (isSmallScreen()) {
  video.play(); // Lancer automatiquement la vidéo sur les petits écrans
} 

else {
  video.addEventListener('mouseover', () => {
    video.play(); // Lire la vidéo au passage de la souris sur les grands écrans
  });

  video.addEventListener('mouseout', () => {
    video.pause(); // Mettre en pause la vidéo lorsque la souris quitte la vidéo sur les grands écrans
  });
}




//2ÈME ÉVÉNEMENT : événement qui permet d'ouvrir la popup avec un clic de souris

 //Pour la ligne popup Phil

 document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButtonP");
  const popup = document.getElementById("popupPhil");
  const popupClose = document.getElementById("popupClosePhil");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});


    //Pour la ligne popup Alex

document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButton");
  const popup = document.getElementById("popupAlex");
  const popupClose = document.getElementById("popupCloseAlex");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});

 //Pour la ligne popup Jordan

 document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButtonJ");
  const popup = document.getElementById("popupJordan");
  const popupClose = document.getElementById("popupCloseJordan");

  openPopupButton.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });
});



//3ÈME ÉVÉNEMENT : événement qui permet de s'inscrire à l'infolettre

document.addEventListener("DOMContentLoaded", function () {
  const popupTrigger = document.getElementById("popupTrigger");
  const popup = document.getElementById("popupscroll");
  const popupClose = document.getElementById("popupClose");

  popupTrigger.addEventListener("click", function () {
      popup.style.display = "block";
  });

  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("scroll", function () {
      if (window.scrollY > 3000) {
          // Faites défiler vers le bas pour ouvrir la popup
          popup.style.display = "block";
      }

  });

});


  // validation js qui provient de bootstrap pour le formulaire de l'infolettre
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  // Ouverture d une seconde popup pour confirmer l'inscription



document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopupButtonI");
  const confirmationPopup = document.getElementById("confirmation");
  const popupCloseInscription = document.getElementById("popupCloseInscription");

  openPopupButton.addEventListener("click", function () {
      confirmationPopup.style.display = "block"; // Afficher la deuxième popup
  });

  popupCloseInscription.addEventListener("click", function () {
      confirmationPopup.style.display = "none"; // Masquer la deuxième popup
  });
  
});











