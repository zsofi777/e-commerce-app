$(".menu li > .sub-menu")
  .parent()
  .click(function() {
    var submenu = $(this).children(".sub-menu");
    if ($(submenu).is(":hidden")) {
      $(submenu).slideDown(200);
    } else {
      $(submenu).slideUp(200);
    }
  });


$("#first").click(function() {
  $(this)
    .parent(".menu")
    .toggleClass("js-opened");
});


// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
$(document).ready(function() {
  if(localStorage.getItem('popState') != 'shown'){
    modal.style.display = "block";
    localStorage.setItem('popState','shown')
  }
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}