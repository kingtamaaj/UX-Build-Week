window.addEventListener("resize", function(event) {
    alert("Let's make sure this will match your device!");
  });



var img = "tamaaj-pic.png";

function changeImage() {
    if ( img == "tamaaj-pic.png" ) {
      document.images["pic"].src = "img/tamaaj-pic.png";
      document.images["pic"].alt = "Tamaaj";
      img  = "javon-pic.jpg";
    }
    else {
      document.images["pic"].src = "img/javon-pic.jpg";
      document.images["pic"].alt = "Javon";
      img  = "tamaaj-pic.png";
    }
  }