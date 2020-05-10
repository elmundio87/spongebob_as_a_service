function getResult(inputId, outputId, top){
  var inputTop = document.getElementById('inputTop').value
  var inputBottom = document.getElementById('inputBottom').value

  var payload = [
    inputTop,
    inputBottom
  ]

  var xhr = new XMLHttpRequest();
  xhr.open("POST", window.location.hostname, true);
  xhr.onload = function() {
    var canvas = document.getElementById('result');
    var ctx = canvas.getContext("2d");

    var img = new Image();
    var responseText = JSON.parse(this.responseText)
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      ctx.font = "42px Arial";
      ctx.strokeStyle = "black";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      console.log(responseText)
      ctx.fillText(responseText[0], canvas.width/2, 42);
      ctx.strokeText(responseText[0], canvas.width/2, 42);
      ctx.fillText(responseText[1], canvas.width/2, 300);
      ctx.strokeText(responseText[1], canvas.width/2, 300);
    }

    img.src = "img/Mocking-Spongebob.jpg";

    console.log(this.responseText);
    document.getElementById('result').innerText = this.responseText;
  }
  xhr.send(JSON.stringify(payload));
}
