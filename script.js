window.onload = function() {
  var htmlElements = ''
  for (var i = 1; i < 85; i++) {
    htmlElements += '<div class=t' + i + '></div>'
  }
  var container = document.getElementById("canvas");
  container.innerHTML = htmlElements;

  container.onclick = function() {
    container.classList.toggle('vue')
  }
}


