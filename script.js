function toggleMenu() {
    let linkDiv = document.getElementById("mobile-link");
     if (linkDiv.style.display !== "block") {
        linkDiv.style.display = "block";
        document.getElementById("menu").innerHTML = '<i class="fa fa-times"></i>';
     }
     else {
        linkDiv.style.display = "none";
        document.getElementById("menu");
        document.getElementById("menu").innerHTML = '<i class="fa fa-bars"></i>';
     }
    }