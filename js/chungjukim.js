window.onload = function () {
  // 스와이퍼
  var swiper = new Swiper('.slide', {
    loop: true,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.slide2', {
    loop: true,
    keyboard: {
      enabled: true,
    },
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
      },
      9999: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
      },
    },
  });
  var swiper = new Swiper('.slideBg', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
  });

  var swiper = new Swiper('.slide4', {
    spaceBetween: 5,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper('.slide3', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

  // 카카오맵
  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(36.634583363685756, 127.45706743355375),
    level: 3,
  };
  var map = new kakao.maps.Map(container, options);
  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(36.634583363685756, 127.45706743355375), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });
  // 마커 위에 표시할 인포윈도우를 생성한다
  var infowindow = new kakao.maps.InfoWindow({
    content: '<div class="kakaoMap" style="font-size:16px;">청주 김안과</div>', // 인포윈도우에 표시할 내용
  });

  // 인포윈도우를 지도에 표시한다
  infowindow.open(map, marker);
  let kakaoMap = document.querySelector('.kakaoMap');
  let kakaoMapP = kakaoMap.parentNode;
  let kakaoMapPaPa = kakaoMapP.parentNode;
  kakaoMapP.classList.add('kakaoMap2');
  kakaoMapPaPa.classList.add('kakaoMap3');

  // 윈도우 width값 768이상 일 때 헤더 스크롤 이벤트 적용
  const header = document.querySelector('header');
  const article1 = document.querySelector('.article1');
  const article1Height = article1.getBoundingClientRect().height;

  // 브라우저 실행 시 가로 값에 따른 헤더 설정
  if (window.innerWidth >= 768) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > article1Height / 2) {
        header.style.background = '#2F2E33';
      } else {
        header.style.background = 'transparent';
      }
    });
  } else {
    header.style.background = '#6590E2';
  };

  // 브라우저 실행 시 헤더 환경 개선
  if (window.innerWidth >= 768 && window.pageYOffset > article1Height / 2) {
    header.style.background = '#2F2E33';
  };

  // 브라우저 리사이징 시 헤더 변경
  function responsiveHeader() {
    if (window.innerWidth <= 767) {
      header.style.background = '#6590E2';
      window.addEventListener('scroll', function () {
        header.style.background = '#6590E2';
      });
    }
    if (window.innerWidth >= 768) {
      header.style.background = 'transparent';
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > article1Height / 2) {
          header.style.background = '#2F2E33';
        }
        if (window.pageYOffset <= article1Height / 2) {
          header.style.background = 'transparent';
        }
      });
    }
  }
  window.addEventListener('resize', responsiveHeader);

  // 모바일 헤더 클릭 이벤트
  const mNav = document.querySelector('.mNav');
  const closeBt = document.querySelector('.close');

  mNav.addEventListener('click', function () {
    header.classList.add('on');
  });
  closeBt.addEventListener('click', function () {
    header.classList.remove('on');
  });

  
  // 비어있는 a태그 이동 막기
  let aTag = document.querySelectorAll('a[href="#"]');
   (function (i) {
    for (var i = 0; i < aTag.length; i++) {
      aTag[i].onclick = function(){
        return false;
      };
    };
  })();

  // 로그인 창 열기
  const login = document.querySelector('.login');
  const loginBt = document.querySelector('.login_button');
  const loginClose = document.querySelector('.login_close');
  loginBt.addEventListener('click', function(){
    login.classList.add('on');
  });
  loginClose.addEventListener('click', function(){
    login.classList.remove('on');
  });
  //로그인 버튼 이벤트 막기
  const submit = document.querySelectorAll(".logins button");
  [].forEach.call(submit, function(eachSubmit){
    eachSubmit.onclick = function(event){
        alert("현재 로그인 불가능합니다. 고객센터 000-0000")
        event.preventDefault()
      };
  });
  // 아이디/비밀번호 찾기 버튼 이벤트 막기
  const pwId = document.querySelector('.pwid');
  pwId.addEventListener('click', function(){
    alert("현재 이용불가합니다. 고객센터 000-0000");
  });

  // // ------- 로그인 유효성 검사 ----------

  // // 대/소문자, 숫자
  // let idReg = RegExp(/^[a-zA-Z0-9]+$/);
  // // 최소 5자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
  // let passwordReg = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,}$/);

  // const kimId = document.querySelector('input[placeholder^="아이디"]');
  // const kimPw = document.querySelector('input[placeholder^="비밀번호"]');
  // const idLog = document.querySelector('.id_log');
  // const pwLog = document.querySelector('.pass_log');

  // // ----------아이디 이벤트--------
  // kimId.addEventListener("focus", function(){
  //   let idText = document.createTextNode("대/소문자 구분 없이 영어, 숫자만 가능합니다.");
  //   idLog.appendChild(idText);
  // });

  // // -----------패스워드 이벤트-------------
  // kimPw.addEventListener("focus", function(){
  //   let pwText = document.createTextNode("대/소문자,숫자,특수문자 포함한 최소 5자 이상 비밀번호 입력해주세요.");
  //   pwLog.appendChild(pwText);
  // });

  // // 공통 포커스 이벤트
  // let logInFocus = function logInFocus (el, el2, el3){
  //   console.log("1");
  //   el.innerText = "";
  //   el.style.color = "#c4c4c4";
  //   if(el2.value !== ""){
  //     console.log("2");
  //     if(!el3.test(el2.value)){
  //       console.log("3");
  //       el.style.color = "red";
  //       el.innerText = "정확한 값을 입력해주세요.";
  //       el.appendChild(document.createElement("br"));
  //       el2.focus();
  //     };
  //   };
  // };
  // console.log(logInFocus);

  // kimId.addEventListener("blur", function(){
  //   logInFocus(idLog, kimId, idReg);
  // });
  // kimPw.addEventListener("blur", function(){
  //   logInFocus(pwLog,kimPw,passwordReg);
  // });


};