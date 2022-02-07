window.onload = function () {

    var swiper = new Swiper('.slide1', {
        observer: true,
        observeParents: true,
        keyboard: {
            enabled: true,
        },
    });

    var swiper = new Swiper('.slide2', {
        observer: true,
        observeParents: true,
        keyboard: {
            enabled: true,
        },
    });

    var swiper = new Swiper('.slide3', {
        observer: true,
        observeParents: true,
        loop: true,
        keyboard: {
            enabled: true,
        },
        pagination: '.swiper-pagination',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween:30,
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
        },
    });

    // 슬라이드1,2 클릭 이벤트
    var slide1 = document.querySelector(".article2_inner > div:nth-child(2)");
    // console.log(slide1);
    var slide2 = document.querySelector(".article2_inner > div:nth-child(3)");
    // console.log(slide2);
    var slideBt1 = document.querySelector(".article2_inner > div:nth-child(1) > button:nth-child(1)");
    // console.log(slideBt1);
    var slideBt2 = document.querySelector(".article2_inner > div:nth-child(1) > button:nth-child(2)");
    // console.log(slideBt2);
    var slideBt1On = function(){
        slide1.classList.add("on");
        slide2.classList.remove("on");
        slideBt1.classList.add("on");
        slideBt2.classList.remove("on");
    }
    // console.log(slideBt1On);
    var slideBt2On = function(){
        slide1.classList.remove("on");
        slide2.classList.add("on");
        slideBt1.classList.remove("on");
        slideBt2.classList.add("on");
    }
    console.log(slideBt2On);
    slideBt1.addEventListener('click', slideBt1On);
    slideBt2.addEventListener('click', slideBt2On);

    var moveBt1 = document.querySelector(".header_inner > div > button:nth-child(1)");
    // console.log(moveBt1);
    var moveBt2 = document.querySelector(".header_inner > div > button:nth-child(2)");
    // console.log(moveBt2);
    var body = document.querySelector("body");
    // console.log(body);
    var article2 = document.querySelector(".article2");

    var move = function(el){
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: el,
        });
    };

    var browser = navigator.userAgent;
    if(browser.match(/Chrome/)){
        moveBt1.addEventListener("click", function(){
            move(body.offsetTop);
            console.log('body로 이동합니다');
        });
        moveBt2.addEventListener("click", function(){
            move(article2.offsetTop);
            console.log('아티클2로 이동합니다')
        });
    } else if(browser.match(/Trident/)){
        var moveIe = function(el){
            window.scroll(0, el);
        };
        moveBt1.addEventListener("click", function(){
            moveIe(body.offsetTop);
            console.log('바디 이동 정상');
        });
        moveBt2.addEventListener("click", function(){
            moveIe(article2.offsetTop);
            console.log('아티클2 이동 정상');
        });
    };

    
    
};