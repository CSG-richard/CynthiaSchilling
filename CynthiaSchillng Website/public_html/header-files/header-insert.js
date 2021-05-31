$(document).ready(function () {
  $(".header-wrapper").load("./header-files/header.html");
  var path = window.location.pathname;
  var sessionName = path.split("/");
  var sessionName = sessionName[sessionName.length - 1];

  setTimeout(() => {
    $(".header-wrapper [href='" + sessionName + "'] > li").each(function () {
      $(this).addClass("current-page");
    });
    $(".menu-button").click(
      function(){
        $("#menu-toggle").toggle()
    });
  }, 100);


});

// function myFunction() {
  // var x = document.getElementById("menu-toggle");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }

// }

