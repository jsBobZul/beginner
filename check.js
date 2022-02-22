const checkId = document.querySelector(".check_id");
const checkPw = document.querySelector(".check_pw");
const logId = document.querySelector(".id_log");
const logPw = document.querySelector(".pass_log");
let focusOn;

function Check() {
    let textId;
    let textPw;

    function idCheck(text) {
        var textId1 = document.createTextNode(text);
        logId.appendChild(textId1);
    };

    if (focusOn = true) {
        console.log('포커스 온');
        
        // checkPw.addEventListener('focus', function () {
        //     var textPw1 = document.createTextNode(Check.textPw);
        //     logPw.appendChild(textPw1);
        // });
    };
};