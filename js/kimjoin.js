window.onload = function () {
    // 주소검색
    function daumPostcode() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                };

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    };
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    };
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    };
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("extraAddress").value = extraAddr;

                } else {
                    document.getElementById("extraAddress").value = '';
                };

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("detailAddress").focus();
            }
        }).open();
    };

    // 우편찾기 클릭 이벤트
    const postButton = document.querySelector(".daum_post");
    postButton.addEventListener('click', daumPostcode);

    // 회원가입약관
    fetch('../회원가입약관').then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.join_text').innerHTML = '<textarea readonly="readonly" cols="100" rows="10" style="resize:none; padding:0 0 0 5px;">' + text + '</textarea>';
        });
    });

    //--------- 폼 유효성 검사 및 이벤트----------

    // 아이디 대/소문자, 숫자만 가능
    const joinId = document.querySelector('input[placeholder^="아이디"]');
    let idReg = RegExp(/^[a-zA-Z0-9]+$/);
    const idLog = document.querySelector('.id_log');
    joinId.addEventListener("focus", function () {
        let idText = document.createTextNode("대/소문자 구분 없이 영어, 숫자만 가능합니다.");
        idLog.appendChild(idText);
    });
    // 아이디 체크
    const idCheck = document.querySelector('input[value="아이디확인"]');
    idCheck.addEventListener('click', function () {
        if (!idReg.test(joinId.value)) {
            alert('아이디를 확인해주세요!\n대/소문자 구분 없이 영어, 숫자만 가능합니다.');
        } else {
            alert(joinId.value + '는 사용 가능한 아이디입니다.');
        }
    });

    // 비밀번호 이벤트 최소 5자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상
    const joinPw = document.querySelector('input[placeholder="비밀번호"]');
    let pwReg = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{5,}$/);
    const pwLog = document.querySelector('.pass_log');
    joinPw.addEventListener("focus", function () {
        let pwText = document.createTextNode("대/소문자,숫자,특수문자 포함한 최소 5자 이상 비밀번호 입력해주세요.");
        pwLog.appendChild(pwText);
    });
    // 아이디, 비밀번호 공통 포커스 이벤트
    let joinBlur = function logInBlur(log, area, reg) {
        log.innerText = "";
        log.style.color = "#c4c4c4";
        if (area.value !== "") {
            if (!reg.test(area.value)) {
                log.style.color = "red";
                log.innerText = "정확한 값을 입력해주세요.";
                log.appendChild(document.createElement("br"));
                area.focus();
            };
        };
    };

    joinId.addEventListener("blur", function () {
        joinBlur(idLog, joinId, idReg);
    });
    joinPw.addEventListener("blur", function () {
        joinBlur(pwLog, joinPw, pwReg);
    });

    // 비밀번호 체크
    const pwCh = document.querySelector('input[placeholder^="비밀번호를 확인"]');
    const pwChkBt = document.querySelector('input[value^="비밀번호 확인"]');
    pwChkBt.addEventListener('click', function(){
        if(joinPw.value !=="" && pwCh.value !==""){
            if(joinPw.value !== pwCh.value){
                alert('비밀번호가 다릅니다.\n비밀번호를 정확히 입력해주세요.');
                return false;
            }else{
                alert('같은 비밀번호입니다.');
            };
        }else{
            alert('비밀번호를 입력해주세요.');
        };
    });

    // 이름체크 이벤트
    let nameReg = RegExp(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/); // 한글체크
    const nameLog = document.querySelector('.name_log');
    const name = document.querySelector('input[placeholder="이름"]');
    name.addEventListener('focus', function(){
        if(name.value == ""){
            nameLog.innerText = "한글 이름만 가능합니다.";
            nameLog.style.fontSize = "12px";
            nameLog.style.color = "#a1a1a1";
            return false;
        };
    });
    name.addEventListener('blur', function(){
        if(!nameReg.test(name.value)){
            nameLog.style.color = 'red';
            name.focus();
            return false;
        }else{
            nameLog.innerText = "";
            return false;
        };
    });

    // 이메일 체크 이벤트
    let emailReg = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i); //숫자 (0~9) or 알파벳 (a~z, A~Z) 으로 시작하며 중간에 -_. 문자가 있을 수 있으며 그 후 숫자 (0~9) or 알파벳 (a~z, A~Z)이 올 수도 있고 연달아 올 수도 있고 없을 수도 있다. @ 는 반드시 존재하며 . 도 반드시 존재하고 a~z, A~Z 의 문자가 2,3개 존재하고 i = 대소문자 구분 안한다.
    const emailLog = document.querySelector('.email_log');
    const email = document.querySelector('input[placeholder^="exam@"]');
    

    // 폰 번호 선택 옵션 넣기
    let phone = document.querySelector("input[type='tel']");
    fetch('../폰번호옵션').then(function (response) {
        let phoneHead = document.querySelector(".tel > select");
        response.text().then(function (text) {
            phoneHead.innerHTML = text;
        });
    });
    // 폰 번호 자동 하이폰
    phone.oninput = function () {
        phone.value = phone.value
            .replace(/[^0-9]/, "")
            .replace(/^(\d{3,4})(\d{4})$/, `$1-$2`);
    };
    phone.addEventListener('focus', function () {
        var reg = (/^[0-9]+/g).test(phone.value);
        if (!reg) {
            phone.focus();
            return false;
        };
    });


    const joinGo = document.querySelector("button[type='submit']");
    joinGo.addEventListener('click', function (event) {
        event.preventDefault();
    });


};