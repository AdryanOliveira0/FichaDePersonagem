let a;  
let b;
let c;
let d; 
let e; 
let f; 


document.getElementById("rollbutton").onclick = function(event){

     event.preventDefault();

     a = Math.floor(Math.random() * 20) + 1;
     b = Math.floor(Math.random() * 20) + 1;
     c = Math.floor(Math.random() * 20) + 1;
     d = Math.floor(Math.random() * 20) + 1;
     e = Math.floor(Math.random() * 20) + 1;
     f = Math.floor(Math.random() * 20) + 1;   

     document.getElementById("forca").innerHTML = a;
     document.getElementById("destreza").innerHTML = b;
     document.getElementById("constituicao").innerHTML = c;
     document.getElementById("inteligencia").innerHTML = d;
     document.getElementById("sabedoria").innerHTML = e;
     document.getElementById("carisma").innerHTML = f;

}

