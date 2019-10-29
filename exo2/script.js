document.getElementById('visible').addEventListener('click', visibleText);
document.getElementById('hidden').addEventListener('click', hiddenText);
function visibleText(){ //On déclare une fonction qui rend visible le texte.
  document.getElementById('text').style.visibility = "visible";
}
function hiddenText(){ //On déclare une fonction qui rend invisible le texte.
  document.getElementById('text').style.visibility = "hidden";
}
