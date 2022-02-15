window.onload = function () {
    const header = document.querySelector("header");
    const navBtn = document.querySelector(".nav_button");
    navBtn.addEventListener("click", function(){
        header.classList.toggle("on");
    });
    
    const mainBtn = document.querySelector(".slide_button");
    const wrapping = document.querySelector(".wrapping");
    let index = 1;
    mainBtn.addEventListener("click", function(){
        wrapping.style.left = `-${index*100}%`;
        mainBtn.style.transform = `rotate(${index*120}deg)`;
        index++;
        if(index === 3){
            index = 0;
        };

    });

};