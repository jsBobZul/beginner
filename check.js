// const checkId = document.querySelector(".check_id");
// const checkPw = document.querySelector(".check_pw");
// const logId = document.querySelector(".id_log");
// const logPw = document.querySelector(".pass_log");
// let focusOn;
// function Check(){
//     let textId;
//     let textPw;
//     function idCheck(text){
//             var textId1 = document.createTextNode(text);
//             logId.appendChild(textId1);
//         };
// };
//     document.onload = function () {
//         if(focusOn = true){
//             console.log('포커스 온');
//             checkId.addEventListener('focus', Check.idCheck(textId));
//             checkPw.addEventListener('focus', function(){
//                 var textPw1 = document.createTextNode(Check.textPw);
//                 logPw.appendChild(textPw1);
//             });
//         };
//     };
(function(){
    var Check = function(container, params){
        if(!(this instanceof Check)) return new Check(container, params);
        
        // var default = {

        // }
    }
});


// 기본 객체를 쫙 만들고 하나하나 if 분기 해서 동작시키는건가 - 220222