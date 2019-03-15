function passPage1(){
  document.getElementById("homescreen").style.display="block";//muestra el bloque o pantallas
  document.getElementById("showMovies").style.display="none";//se hace invisible mi pantalla
  //document.getElementById("resources").style.display="none";
  document.getElementById("video").innerHTML=`<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/WOi2Bwvp6hw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

document.getElementById("About").addEventListener("click", passPage1); //salto de pagina con click

function passPage2(){
  document.getElementById("homescreen").style.display="none";
  document.getElementById("showMovies").style.display="block";
  //document.getElementById("showMovies").style.display="none";
  document.getElementById("video").innerHTML="";
}
document.getElementById("Movies").addEventListener("click", passPage2);

function passPage3(){
  document.getElementById("Movies").style.display="none";
  document.getElementById("About").style.display="none";
  //document.getElementById("Resources").style.display="block";
  document.getElementById("video").innerHTML="";
}
//document.getElementById("resources").addEventListener("click", passPage3);


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//Buttons

document.getElementById("select").addEventListener("change", (event) => {
  let filterMood = getMoviesbyDefaultMood(mood, event.target.value);
  document.getElementById('selectResults').innerHTML= movieInfoLayout(filterMood);
  
  });

  function passRecomendation1(){
    document.getElementById("down").style.display="none";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker mfirst timeline-icon one").addEventListener("click", passRecomendation1);

  function passRecomendation2(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="none";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m2 timeline-icon two").addEventListener("click", passRecomendation2);

  function passRecomendation3(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="none";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m3 timeline-icon three").addEventListener("click", passRecomendation3);

  function passRecomendation4(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="none";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m4 timeline-icon four").addEventListener("click", passRecomendation4);

  function passRecomendation5(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="none";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m5 timeline-icon five").addEventListener("click", passRecomendation5);

  function passRecomendation6(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="none";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m6 timeline-icon six").addEventListener("click", passRecomendation6);

  function passRecomendation7(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="none";
    document.getElementById("irritable").style.display="block";
  }
  document.getElementsByClassName("marker m7 timeline-icon seven").addEventListener("click", passRecomendation7);

  function passRecomendation8(){
    document.getElementById("down").style.display="block";
    document.getElementById("powerUp").style.display="block";
    document.getElementById("doIt").style.display="block";
    document.getElementById("appeal").style.display="block";
    document.getElementById("emotional").style.display="block";
    document.getElementById("sensitive").style.display="block";
    document.getElementById("irritable").style.display="block";
    document.getElementById("irritable").style.display="none";
  }
  document.getElementsByClassName("marker mlast timeline-icon eight").addEventListener("click", passRecomendation8);