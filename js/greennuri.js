window.onload = function () {
  var menuA = document.querySelector('.menu > a');
  var menuUl = document.querySelectorAll('.menu > ul');
  var gnb = document.querySelector('.gnb');
  var gnbLastLi = gnb.children[5];
  var liLastC = gnbLastLi.children[1];
  var lastSubMenu = liLastC.children[0];
  var lastA = lastSubMenu.children[1];

  var ulOn = function (i) {
    for (var i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.add('on');
    }
    gnb.classList.add('on');
  };

  var ulOff = function (i) {
    for (var i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.remove('on');
    }
    gnb.classList.remove('on');
  };

  // 태블릿, pc gnb TAP 포커싱 구현
  if(window.innerWidth > 767){
    menuA.addEventListener('focus', ulOn);
    lastA.addEventListener('blur', ulOff);
    window.addEventListener('click', ulOff);
  };

  // 비어있는 a태그 이동 막기
  var aTag = document.querySelectorAll('a[href="#"]');
    for(var i = 0; i < aTag.length; i++){
      aTag[i].onclick = function(){
        return false;
      };
    };

};