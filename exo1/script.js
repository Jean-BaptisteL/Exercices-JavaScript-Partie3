document.getElementById('image1').addEventListener('mouseover', borderApparition);
document.getElementById('image1').addEventListener('mouseout', borderDisparition);
//Déclaration des fonctions contrôlant l'apparition de la bordure lors du survol de l'image et sa disparition lorsqu'on ne la survolle plus.
function borderApparition(){
  document.getElementById('image1').style.border = '3px solid red'; //On sélectionne le style et plus précisément la bordure de l'image.
}
function borderDisparition(){
  document.getElementById('image1').style.border = 'none';
}
