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

};