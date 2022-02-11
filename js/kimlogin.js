// ------- 로그인 유효성 검사 ----------

  // 대/소문자, 숫자
  let idReg = RegExp(/^[a-zA-Z0-9]+$/);
  // 최소 5자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
  let passwordReg = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,}$/);

  const kimId = document.querySelector('input[placeholder^="아이디"]');
  const kimPw = document.querySelector('input[placeholder^="비밀번호"]');
  const idLog = document.querySelector('.id_log');
  const pwLog = document.querySelector('.pass_log');

    function (el){
        a.addEventlistener('focus', function(){
            alert("대/소문자 구분 없이 영어, 숫자만 가능합니다.");
        }, {once:true});
    };


//   // ----------아이디 이벤트--------
//   kimId.addEventListener("focus", function(){
//     let idText = document.createTextNode("대/소문자 구분 없이 영어, 숫자만 가능합니다.");
//     idLog.appendChild(idText);
//   });

//   // -----------패스워드 이벤트-------------
//   kimPw.addEventListener("focus", function(){
//     let pwText = document.createTextNode("대/소문자,숫자,특수문자 포함한 최소 5자 이상 비밀번호 입력해주세요.");
//     pwLog.appendChild(pwText);
//   });

//   // 공통 포커스 이벤트
//   let logInFocus = function logInFocus (el, el2, el3){
//     el.innerText = "";
//     el.style.color = "#c4c4c4";
//     if(el2.value !== ""){
//       if(!el3.test(el2.value)){
//         el.style.color = "red";
//         el.innerText = "정확한 값을 입력해주세요.";
//         el.appendChild(document.createElement("br"));
//         el2.focus();
//       };
//     };
//   };
//   console.log(logInFocus);

//   kimId.addEventListener("blur", function(){
//     logInFocus(idLog, kimId, idReg);
//   });
//   kimPw.addEventListener("blur", function(){
//     logInFocus(pwLog,kimPw,passwordReg);
//   });