//localStorage.nombre="Fernando";
//localStorage.apellidos="Baeza";
//localStorage.email="ana@mail.com";



window.onload =function(){
  document.getElementById("name").value="x";
}



function mostrar() {
    var x = document.getElementById("main_form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function formu(){
    let na2=localStorage.na;
    let su2=localStorage.su;
    let ma2=localStorage.ma;
    
    var na= document.getElementById("name").value;
    localStorage.setItem("Nombre", na);
    var su= document.getElementById("surname").value;
    localStorage.setItem("Apellidos", su);
    var ma= document.getElementById("mail").value;
    localStorage.setItem("Mail", ma);
    var xa = document.getElementById("main2");
    if (xa.style.display === "none") {
      xa.style.display = "block";
    } else {
      xa.style.display = "none";
    }
    if (na===""){
        na=na2;
    }
    if (su===""){
        su=su2;
    }
    if (ma===""){
        ma=ma2;
    }
    var main = document.getElementById("main2").innerHTML+="<div id='segundoDiv'>" + "Hola "+ na +" "+ su+" " +" tu email es:  "+ ma +"</div>"; 
  }

/*
var div = document.createElement('div');
div.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
// set style
div.style.color = 'red';
// better to use CSS though - just set class
div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
document.body.appendChild(div);

*/

