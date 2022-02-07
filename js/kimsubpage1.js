window.onload = function () {
  // 모바일 헤더 클릭 이벤트
  const mNav = document.querySelector('.mNav');
  const closeBt = document.querySelector('.close');
  const header = document.querySelector('header')

  mNav.addEventListener('click', function () {
    header.classList.add("on");
  });
  closeBt.addEventListener('click', function () {
    header.classList.remove("on");
  });

  //드롭 메뉴 부드러운 이동
  const move = function(a){
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: a
    });
  };
  const sub1Bt = document.querySelectorAll(".sub1 > button");
  console.log(sub1Bt);
  const article2 = document.querySelector(".article2");
  const article4 = document.querySelector(".article4");
  const article5 = document.querySelector(".article5");
  const article2Top = article2.offsetTop-70;
  const article4Top = article4.offsetTop-70;
  const article5Top = article5.offsetTop-90;
  sub1Bt[0].addEventListener("click", function(){
    move(article2Top);
  });
  sub1Bt[1].addEventListener("click", function(){
    move(article4Top);
  });
  sub1Bt[2].addEventListener("click", function(){
    move(article5Top);
  });

  // const hashAritcle = [article2, article4, article5];
  // const hashAritcle = [article2Top, article4Top, article5Top];

  // hashAritcle.forEach(function(eachArticle, index){
  //     let abcd = eachArticle.offsetTop-70;
  //     console.log(eachArticle);
  //   });
    // sub1Bt.forEach(function(eachBt){
    //   console.log(eachBt);
    //   eachBt.addEventListener("click", function(){
    //     move(hashAritcle);
    //   });
    // });

  // 타 페이지에서 이동
  if(location.hash === '#a1'){
    window.scroll({
      left: 0,
      top: article2Top
    });
  }else if(location.hash === "#a2"){
    window.scroll({
      left: 0,
      top: article4Top
    });
  }else if(location.hash === "#a3"){
    window.scroll({
      left: 0,
      top: article5Top
    });
  };

};