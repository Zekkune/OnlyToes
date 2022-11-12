function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("showin");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "click for more info";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function signup() {
  window.location.href = "onlytoes.html";
}
function createacc() {
  window.location.href = "form.html";
  return false
}

function myTerms() {
  var termsText = document.getElementById("terms-text");
  var moreBtnText = document.getElementById("moreBtn");
  
  if (termsText.style.display === "inline") {
    termsText.style.display = "none";
    moreBtnText.innerHTML = "open terms";
  } else {
    termsText.style.display = "inline";
    moreBtnText.innerHTML = "close terms";
  }
}
