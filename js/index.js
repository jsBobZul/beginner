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
    const project = document.querySelector(".project");

    // 메인 슬라이드 구현
    let index = 1;
    let rotate = 90;

    let slideRightEvent = function (){
        wrapping.style.left = `-${index*100}%`;
        mainBtnInner.style.transform = `rotate(${index*90}deg)`;
        rotate = index*90;
        index++;
        if(index === 4){
            index = 0;
        };
    };
    
    let slideLeftEvent = function (){
        let wrappingLeft = window.getComputedStyle(wrapping).left;
        let projectWidth = window.getComputedStyle(project).width;
        let numReg = RegExp(/[^0-9]/g);
        let wLeft = wrappingLeft.replace(numReg, ""); //숫자 변환
        let pWidth = projectWidth.replace(numReg, ""); //숫자 변환
        let responeSlide = (wLeft/pWidth-1)*100;
        if(responeSlide >= 0){
            rotate = rotate-90;
            wrapping.style.left = `${-responeSlide}%`;
            mainBtnInner.style.transform = `rotate(${rotate}deg)`;
            index--;
            if(index < 0){
                index=1;
            };
        };
    };
    mainBtn.addEventListener("click", slideRightEvent); // 메인 버튼 클릭 시 슬라이드 동작
    let moveSlide
    wrapping.addEventListener("mousedown", function(e){
        moveSlide = e.offsetX;
    });
    wrapping.addEventListener("mouseup", function(e){
        let moveEvent = moveSlide - e.offsetX;
        if(moveEvent > 0){
            slideRightEvent();
        }else if(moveEvent < 0){
            slideLeftEvent();
        };
    });


    let globalBtn = document.querySelectorAll('header > button'); // 글로벌 네비게이션 슬라이드 동기화
    for(let i = 0; i <  globalBtn.length; i++){
        globalBtn[i].addEventListener('click', function(){
            wrapping.style.left = `-${i*100}%`;
            mainBtnInner.style.transform = `rotate(${i*90}deg)`;
        });
    };

};