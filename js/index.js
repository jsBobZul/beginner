window.onload = function () {
    const mainInner = document.querySelector(".main_inner");
    const navBtn = document.querySelector(".nav_button");

    // grobal Nav 이벤트
    navBtn.addEventListener("click", function(){
        mainInner.classList.toggle("on");
    });
    
    const mainBtn = document.querySelector(".slide_button");
    const mainBtnInner = document.querySelector(".slide_button > span");
    const wrapping = document.querySelector(".wrapping");

    // 메인 슬라이드 구현
    let index = 1;
    let slideEvent = function (){
        wrapping.style.left = `-${index*100}%`;
        mainBtnInner.style.transform = `translate(50%, 0) rotate(${index*90}deg)`;
        index++;
        if(index === 4){
            index = 0;
        };
    };
    mainBtn.addEventListener("click", slideEvent); // 메인 버튼 클릭 시 슬라이드 동작
    wrapping.addEventListener("mouseup", slideEvent); // 슬라이드 마우스 이벤트

    let globalBtn = document.querySelectorAll('header > button'); // 글로벌 네비게이션 슬라이드 동기화
    for(let i = 0; i <  globalBtn.length; i++){
        globalBtn[i].addEventListener('click', function(){
            wrapping.style.left = `-${i*100}%`;
            mainBtnInner.style.transform = `translate(50%, 0) rotate(${i*90}deg)`;
        });
    };

};