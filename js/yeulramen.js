window.onload = function () {

    var swiper1 = new Swiper('.slide1', {
        observer: true,
        observeParents: true,
        keyboard: {
            enabled: true,
        },
    });

    var swiper2 = new Swiper('.slide2', {
        observer: true,
        observeParents: true,
        keyboard: {
            enabled: true,
        },
    });

    var swiper3 = new Swiper('.slide3', {
        observer: true,
        observeParents: true,
        keyboard: {
            enabled: true,
        },
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        },
        loop: true,
        pagination: '.swiper-pagination',
    });

    // 슬라이드1,2 클릭 이벤트
    const slide1 = document.querySelector(".article2_inner > div:nth-child(2)");
    console.log(slide1);
    const slide2 = document.querySelector(".article2_inner > div:nth-child(3)");
    console.log(slide2);
    const slideBt1 = document.querySelector(".article2_inner > div:nth-child(1) > button:nth-child(1)");
    console.log(slideBt1);
    const slideBt2 = document.querySelector(".article2_inner > div:nth-child(1) > button:nth-child(2)");
    console.log(slideBt2);
    var slideBt1On = function(){
        slide1.classList.add("on");
        slide2.classList.remove("on");
        slideBt1.classList.add("on");
        slideBt2.classList.remove("on");
    }
    console.log(slideBt1On);
    var slideBt2On = function(){
        slide1.classList.remove("on");
        slide2.classList.add("on");
        slideBt1.classList.remove("on");
        slideBt2.classList.add("on");
    }
    console.log(slideBt2On);
    slideBt1.addEventListener('click', slideBt1On);
    slideBt2.addEventListener('click', slideBt2On);

    const moveBt1 = document.querySelector(".header_inner > div > button:nth-child(1)");
    console.log(moveBt1);
    const moveBt2 = document.querySelector(".header_inner > div > button:nth-child(2)");
    console.log(moveBt2);
    const body = document.querySelector("body");
    console.log(body);
    const article2 = document.querySelector(".article2")
    let move = function(a){
        window.scroll({
            behavior: 'smooth',
            left:0,
            top:a
        });
    };

    moveBt1.addEventListener("click", function(){
        move(body.offsetTop);
    });
    moveBt2.addEventListener("click", function(){
        move(article2.offsetTop-100);
    });

    const fire = document.querySelector(".fire");
    let a = Math.floor(Math.random()*2000)+150;
    let moveFire = function(n){
        fire.style.width = 10 + 'px';
        fire.style.height = 10 + 'px';
        fire.style.position = 'absolute';
        fire.style.left = 0;
        fire.style.top = n + 'px';
        fire.style.animation = 'fire_move linear 15s';
        fire.style.background = 'red';
        fire.style.borderRadius = 100 + 'px';
        fire.style.zIndex = -1;
        fire.style.opacity = 0;
    };
    console.log(moveFire);
    console.log(a);
    for(var i = 0; i < 15; i++){
        moveFire(a);
        return i;
    };

};