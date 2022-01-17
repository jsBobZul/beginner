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
    for (i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.add('on');
    }
    gnb.classList.add('on');
    // console.log('포커스로 gnb가 열립니다.');
  };

  var ulOff = function (i) {
    for (i = 0; i < menuUl.length; i++) {
      menuUl[i].classList.remove('on');
    }
    gnb.classList.remove('on');
    // console.log('gnb가 닫힙니다.');
  };

  // gnb 태블릿, PC에서 tap 포커싱 가능
  menuA.addEventListener('focus', function () {
    if (window.innerWidth > 767) {
      ulOn();
    }
  });
  lastA.addEventListener('blur', function () {
    if (window.innerWidth > 767) {
      ulOff();
    }
  });
  //gnb 포커싱 중 다른 곳 클릭 시 닫힘
  window.addEventListener('click', function () {
    if (window.innerWidth > 767) {
      ulOff();
    }
  });
};
