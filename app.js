window.addEventListener("DOMContentLoaded", function () {
    var template = document.getElementById("article-template");
    var articles = document.getElementById("articles");

  
    for (let i = 1; i <= 5; i++) {
        var clonado = template.cloneNode(true);
        clonado.removeAttribute("id");
        var h2 = clonado.getElementsByTagName("h2")[0];
        h2.innerHTML = h2.textContent + " " + i;
        articles.appendChild(clonado);
    }

    
    var menuToggle = document.querySelector(".menu-toggle");
    var menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", function () {
        menuList.classList.toggle("show");
    });
});