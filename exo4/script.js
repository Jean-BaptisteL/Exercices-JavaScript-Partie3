document.getElementById('confirmation').addEventListener('click',passwordConfirmation);
function passwordConfirmation(){
  let inputOne = document.getElementById('password').value;
  let inputTwo = document.getElementById('confirmPassword').value;
  if(inputOne == '' || inputTwo == ''){
    document.getElementById('password').style.border = '1px solid red';
    document.getElementById('confirmPassword').style.border = '1px solid red';
    alert('Veuillez remplir les deux champs.');
  } else if (inputOne != inputTwo) {
    document.getElementById('password').style.border = '1px solid red';
    document.getElementById('confirmPassword').style.border = '1px solid red';
  } else {
    document.getElementById('password').style.border = '1px solid green';
    document.getElementById('confirmPassword').style.border = '1px solid green';
  }
}
