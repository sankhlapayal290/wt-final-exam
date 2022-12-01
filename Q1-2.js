document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.setAttribute("data-theme", "light");

    
    var themeSwitcher = document.getElementById("themeswitcher");

    
    themeSwitcher.onclick = function() {
    
      var currentTheme = document.documentElement.getAttribute("data-theme");   
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", switchToTheme);
    }
  });