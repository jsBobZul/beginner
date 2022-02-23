window.onload = function () {
    const mainInner = document.querySelector(".main_inner");
    const navBtn = document.querySelector(".nav_button");
    const navBtnSpan = document.querySelector(".nav_button > span");
    const header = document.querySelector("header");
    const mainBtn = document.querySelector(".slide_button");
    const mainBtnInner = document.querySelector(".slide_button > span");
    const wrapping = document.querySelector(".wrapping");
    const project = document.querySelector(".project");
    let projects = document.querySelectorAll('.project');
    let globalBtn = document.querySelectorAll('header button');
    
    // grobal Nav 이벤트
    navBtn.addEventListener("click", function () {
        mainInner.classList.toggle("on");
        header.classList.toggle("on");
        navBtnSpan.classList.toggle("on");
    });

    // 메인 슬라이드 구현
    let index = 1;
    let rotate = 360/projects.length;
    const x = 360/projects.length
    let numReg = RegExp(/[^0-9]/g);
    let ccc = mainBtnInner.style.boxShadow;
    wrapping.ondragstart = function () { //다른 요소 드래그 방지
        return false;
    };

    let slideRightEvent = function () {
        if (index === 0) {
            index = 1;
        };
        wrapping.style.left = `-${index*100}%`;
        mainBtnInner.style.transform = `rotate(${index*x}deg)`;
        rotate = index * x;
        index++;
        if (index === projects.length) {
            index = projects.length-1;
        };
        let aaa = mainBtnInner.style.getPropertyValue('transform');
        console.log(aaa);
        let bbb = aaa.replace(numReg, "");
        console.log(bbb);
        // if(0 <= bbb < 90){
        //     ccc = 
        // }else if(90 <= bbb < 180){

        // }else if(180 <= bbb < 270){

        // }else{

        // };
    };

    let slideLeftEvent = function () {
        let wrappingLeft = window.getComputedStyle(wrapping).left;
        let projectWidth = window.getComputedStyle(project).width;
        // let numReg = RegExp(/[^0-9]/g);
        let wLeft = wrappingLeft.replace(numReg, ""); //숫자 변환
        let pWidth = projectWidth.replace(numReg, ""); //숫자 변환
        let responeSlide = (wLeft / pWidth - 1) * 100;
        if (responeSlide >= 0) {
            rotate = rotate - x;
            wrapping.style.left = `${-responeSlide}%`;
            mainBtnInner.style.transform = `rotate(${rotate}deg)`;
            index--;
        };
    };
    mainBtn.addEventListener("click", slideRightEvent); // 메인 버튼 클릭 시 슬라이드 동작
    mainBtn.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        slideLeftEvent();
    });

    let moveSlide // 슬라이드 이벤트
    wrapping.addEventListener("mousedown", function (e) {
        moveSlide = e.offsetX;
    });
    wrapping.addEventListener("mouseup", function (e) {
        let moveEvent = moveSlide - e.offsetX;
        if (moveEvent > 0) {
            slideRightEvent();
        } else if (moveEvent < 0) {
            slideLeftEvent();
        };
    });

    // 글로벌 네비게이션 슬라이드 동기화
    function move(el){
        scroll(0,el)
    };
    for (let i = 0; i < globalBtn.length; i++) {
        globalBtn[i].addEventListener('click', function () {
            if(window.innerWidth >= 768){
                wrapping.style.left = `-${i*100}%`;
                mainBtnInner.style.transform = `rotate(${i*90}deg)`;
            }else{
                alert("띵동~ 이동되었습니다.");
                move(projects[i].offsetTop);
            };
        });
    };

};