window.onload = function() {

    // ------- 로그인 유효성 검사 ----------

    // 대/소문자, 숫자
    let idReg = RegExp(/^[a-zA-Z0-9]+$/);
    // 최소 5자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
    let passwordReg = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,}$/);

    const kimId = document.querySelector('input[placeholder^="아이디"]');
    const kimPw = document.querySelector('input[placeholder^="비밀번호"]');
    const idLog = document.querySelector('.id_log');
    const pwLog = document.querySelector('.pass_log');

    // ----------아이디 이벤트--------
    kimId.addEventListener("focus", function() {
        let idText = document.createTextNode("대/소문자 구분 없이 영어, 숫자만 가능합니다.");
        idLog.appendChild(idText);
    });

    // -----------패스워드 이벤트-------------
    kimPw.addEventListener("focus", function() {
        let pwText = document.createTextNode("대/소문자,숫자,특수문자 포함한 최소 5자 이상 비밀번호 입력해주세요.");
        pwLog.appendChild(pwText);
    });

    // 공통 포커스 이벤트
    let logInBlur = function logInBlur(area, log, reg) {
        area.innerText = "";
        area.style.color = "#c4c4c4";
        if (log.value !== "") {
            if (!reg.test(log.value)) {
                area.style.color = "red";
                area.innerText = "정확한 값을 입력해주세요.";
                area.appendChild(document.createElement("br"));
                log.focus();
            };
        };
    };

    kimId.addEventListener("blur", function() {
        logInBlur(idLog, kimId, idReg);
    });
    kimPw.addEventListener("blur", function() {
        logInBlur(pwLog, kimPw, passwordReg);
    });

    //   로그인 버튼 클릭 이벤트
    const logins = document.querySelectorAll(".logins > button");

    [].forEach.call(logins, function(eachLoginBt){
        eachLoginBt.onclick = function(event){
            event.preventDefault();
            alert('현재 로그인 불가능합니다. 고객센터 000-0000');
        };
    });

};