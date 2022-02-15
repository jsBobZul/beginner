window.onload = function () {
    const header = document.querySelector("header");
    const navBtn = document.querySelector(".nav_button");
    navBtn.addEventListener("click", function(){
        header.classList.toggle("on");
    });


};
