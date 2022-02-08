window.onload = function () {
  var menuA = document.querySelector('.menu > a');
  // console.log(menuA);
  var menuUl = document.querySelectorAll('.menu > ul');
  // console.log(menuUl);
  var gnb = document.querySelector('.gnb');
  // console.log(gnb);
  var gnbLastLi = gnb.children[5];
  // console.log(gnbLastLi);
  var liLastC = gnbLastLi.children[1];
  // console.log(liLastC);
  var lastSubMenu = liLastC.children[0];
  // console.log(lastSubMenu);
  var lastA = lastSubMenu.children[1];
  // console.log(lastA);

  var ulOn = function (i) {
    for (var i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.add('on');
    }
    gnb.classList.add('on');
    // console.log('포커스로 gnb가 열립니다.');
  };

  var ulOff = function (i) {
    for (var i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.remove('on');
    }
    gnb.classList.remove('on');
    // console.log('gnb가 닫힙니다.');
  };

  // 태블릿, pc gnb TAP 포커싱 구현
  if(window.innerWidth > 767){
    menuA.addEventListener('focus', ulOn);
    lastA.addEventListener('blur', ulOff);
    window.addEventListener('click', ulOff);
  };

  // NodeList.forEach ie에서 사용 가능
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  };
  
  // 비어있는 a태그 이동 막기
  var aTag = document.querySelectorAll('a[href="#"]');
  aTag.forEach(function(eachATag){
    eachATag.onclick = function(){
      return false;
    };
  });

  // (function (i) {
  //   for (var i = 0; i < aTag.length; i++) {
  //     aTag[i].onclick = function(){
  //       return false;
  //     };
  //   };
  // })();

};
