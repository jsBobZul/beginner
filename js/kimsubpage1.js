window.onload = function () {
  // 모바일 헤더 클릭 이벤트
  let mNav = document.querySelector('.mNav');
  let closeBt = document.querySelector('.close');
  let header = document.querySelector('header')

  mNav.addEventListener('click', function () {
    header.classList.add("on");
  });
  closeBt.addEventListener('click', function () {
    header.classList.remove("on");
  });

  //드롭 메뉴 부드러운 이동
  $(".sub1 a").each(function () {
    var thisOffset = $($(this).attr('href')).offset().top - 70;
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: thisOffset
      }, 800);
      return false;
    });
  })

  if (location.hash === '#a1'){
    console.log('첫번 째');
    var hash1 = function() {
      let thisOffset1 = $('#a1').offset().top - 70;
      $("html, body").scrollTop(thisOffset1);
      console.log('첫번 째 실행');
    };
    hash1 ();
  }else if(location.hash === '#a2'){
    console.log('두번 째');
    var hash2 = function() {
      let thisOffset2 = $('#a2').offset().top - 70;
      $("html, body").scrollTop(thisOffset2);
      console.log('두번 째 실행');
    };
    hash2 ();
  };

};