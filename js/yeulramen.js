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
        keyboard: {
            enabled: true,
        },
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

    
}