var head = document.querySelector("h1");
head.style.color = 'red';
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
      }
    return color
}
function changeHeaderColor(){
    var colorInput = getRandomColor()
    head.style.color = colorInput;
}
setInterval("changeHeaderColor()",500);