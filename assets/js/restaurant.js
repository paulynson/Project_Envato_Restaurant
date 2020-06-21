// let b = document.querySelector("body");

function dropNav(){
const menu = document.getElementById('navBar');
if (menu.className === "menu-nav"){
menu.className += " active";
} else {
    menu.className = "menu-nav"; 
}
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }