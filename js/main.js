
var isBlack = 0;
document.getElementById('centered').style.background= getBgColorStorage();

function changeBackground() {
  if (isBlack == 0) {
    document.getElementById('bg').style="background-color:#52b0d6; color:white;";
    document.getElementById('selectback').innerHTML="CHANGE WEB BACKGROUND COLOR... (#2)";
    document.getElementById('selectback').style="background-color:#464141;";
    isBlack=true;
    isBlack= 1;
  }

  else{
    document.getElementById('bg').style="background-image:url('issets/images/backgrnd.jpg'); color:white;";
    document.getElementById('selectback').innerHTML="RESTORE TO DEFAULT BACKGROUND COLOR... (#3)";
    document.getElementById('selectback').style="background-color:black;";
    isBlack=true;
    isBlack= 0;
  }
}

function theInputColor(myColor) {
  saveBgColorStorage(myColor);
  document.getElementById('centered').style.background= getBgColorStorage();
  document.getElementById('theColor').innerHTML= getBgColorStorage();
}

function saveBgColorStorage(color) {
  localStorage.setItem('color', color);
}

function getBgColorStorage() {
  const theColor = localStorage.getItem('color');
  if(theColor === null || theColor === undefined) {
    document.getElementById('centered').style.background= '#3e5652';
  } else {
    return localStorage.getItem('color');
  }
}
