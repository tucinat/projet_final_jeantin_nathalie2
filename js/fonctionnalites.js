// ÉVÉNEMENT : écoute de la saisie de l utilisateur et recopie selon la police choisie

var messageInput = document.getElementById('autremessage');
var textMiroir = document.getElementById('textMiroir');
var radioTimesNewRoman = document.getElementById('timesNewRoman');
var radioArial = document.getElementById('arial');

messageInput.addEventListener('input', function () {
  var selectedFont = radioTimesNewRoman.checked ? 'Times New Roman' : 'Arial';
  textMiroir.style.fontFamily = selectedFont;
  textMiroir.innerText = messageInput.value;
});

// Définition de la police par défaut
radioTimesNewRoman.checked = true;
textMiroir.style.fontFamily = 'Times New Roman';