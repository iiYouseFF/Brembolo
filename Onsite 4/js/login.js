const CreateBTN = document.getElementById("Create");
const HaveBTN = document.getElementById("Have");
const layer = document.getElementById("layer");
const layerTXT =document.getElementById("layer-txt");
HaveBTN.addEventListener("click" , ()=>{
    layer.classList.remove("left-50");
    layer.classList.add("left-0");
    layerTXT.innerText = "Welcome Back";
    document.title = "Login";
})
CreateBTN.addEventListener("click" , ()=>{
    layer.classList.add("left-50");
    layer.classList.remove("left-0");
    layerTXT.innerText = "Welcome To The Secure World";
    document.title = "Register";
})


// Register Validation
const UN = document.getElementById("UN");
const Email = document.getElementById("Email");
const PW = document.getElementById("PW");
const CPW = document.getElementById("CPW");
const label = document.getElementById("label");
const RegisterBTN = document.getElementById("Register")
const UNL = document.getElementById("UNL");
const PWL = document.getElementById("PWL");
const LoginBTN = document.getElementById("login");
let testUN = false;
let testEM = false;
let testPW = false;
let testCPW = false;

UN.addEventListener("keyup" , ()=>{
    if(UN.value == ""){
        UN.style.borderColor = "rgba(214, 22, 22, 0.76)";
        testUN = false;
    }
    if(UN.value != ""){
        UN.style.borderColor = "rgba(1, 182, 1, 0.712)";
        testUN = true;
        localStorage.setItem("UN" , UN.value);;
    }
} )
Email.addEventListener("keyup" , ()=>{
    const ECheck = Email.value.match(/@gmail.com/);
    if (Email.value.length == 0 ){
        Email.style.borderColor = "#0C959B";
        testEM = false ;
    }
    if (ECheck == null && Email.value.length != 0) {
        Email.style.borderColor = "rgba(214, 22, 22, 0.76)";
        testEM = false;
    }
    if(ECheck != null && Email.value.length != 0){
        Email.style.borderColor = "rgba(1, 182, 1, 0.712)";
        testEM = true ;
    }
})
PW.addEventListener("keyup" , ()=>{
    const PWCheck = PW.value.length;
    if (PWCheck == 0){
        PW.style.borderColor = "#0C959B";
        testPW = false;
    }
    if (PWCheck < 7 && PWCheck > 0) {
        PW.style.borderColor = "rgba(214, 22, 22, 0.76)";
        testPW = false;
    }
    if(PWCheck != 0 && PWCheck > 7){
        PW.style.borderColor = "rgba(1, 182, 1, 0.712)";
        testPW = true;
        localStorage.setItem("PW" , PW.value);
    }
    
}) 
CPW.addEventListener("keyup", ()=>{
    if(CPW.value == PW.value){
        CPW.style.borderColor = "rgba(1, 182, 1, 0.712)";
        testCPW = true;
    }
    if (CPW.value != PW.value) {
        CPW.style.borderColor = "rgba(214, 22, 22, 0.76)";
        testCPW = false;
    }
    if(CPW.value == ""){
        CPW.style.borderColor = "#0C959B";
        testCPw = false;
    }
})

RegisterBTN.addEventListener("click" , ()=>{
    if(testUN == true && testEM == true && testPW == true && testCPW == true){
        UN.style.borderColor = "rgba(1, 182, 1, 0.712)";
        Email.style.borderColor = "rgba(1, 182, 1, 0.712)";
        PW.style.borderColor = "rgba(1, 182, 1, 0.712)";
        CPW.style.borderColor = "rgba(1, 182, 1, 0.712)";
        UNL.value = localStorage.getItem("UN");
        PWL.value = localStorage.getItem("PW");
        layer.classList.remove("left-50");
        layer.classList.add("left-0");
        layerTXT.innerText = "Welcome Back";
        document.title = "Login";
    }
    else{
        UN.style.borderColor = "rgba(214, 22, 22, 0.76)";
        Email.style.borderColor = "rgba(214, 22, 22, 0.76)";
        PW.style.borderColor = "rgba(214, 22, 22, 0.76)";
        CPW.style.borderColor = "rgba(214, 22, 22, 0.76)";
    }
})
// let testUNL = false;
// let testPWL = false;
// UNL.addEventListener("keyup" , ()=>{
//     const UNS = localStorage.getItem("UN");
//     if (UNL.value == UNS) {
//         UNL.style.borderColor = "rgba(1, 182, 1, 0.712)";
//         testUNL = true;
//     }
//     if (UNL.value != UNS) {
//         UNL.style.borderColor = "rgba(214, 22, 22, 0.76)";
//         testUNL = false;
//     }
//     if (UNL.value.length == 0){
//         UNL.style.borderColor = "#0C959B";
//         testUNL = false
//     }
// })
// PWL.addEventListener("keyup" , ()=>{
//     const PWS = localStorage.getItem("PW");
//     if (PWL.value == PWS) {
//         PWL.style.borderColor = "rgba(1, 182, 1, 0.712)";
//         testPWL = true;
//     }
//     if (PWL.value != PWS) {
//         PWL.style.borderColor = "rgba(214, 22, 22, 0.76)";
//         testPWL = false;
//     }
//     if (PWL.value.length == 0){
//         PWL.style.borderColor = "#0C959B";
//         testPWL = false
//     }
// })
// localStorage.removeItem("flag")
// LoginBTN.addEventListener("click" , ()=>{
//     if (testUNL == true && testPWL == true){
//         localStorage.setItem("flag" , "loggedin")
//         window.location.href = "../HTML/index.html"
//     }
//     if (testUNL == false || testPWL == false) {
//         UNL.style.borderColor = "rgba(214, 22, 22, 0.76)";
//         PWL.style.borderColor = "rgba(214, 22, 22, 0.76)";
//     }
// })
localStorage.removeItem("flag")
LoginBTN.addEventListener("click" , ()=>{
    if (UNL.value == localStorage.getItem("UN") && PWL.value == localStorage.getItem("PW")){
        UNL.style.borderColor = "rgba(1, 182, 1, 0.712)";
        PWL.style.borderColor = "rgba(1, 182, 1, 0.712)";
        localStorage.setItem("flag" , "loggedin")
        window.location.href = "../HTML/index.html"
    }
    if (UNL.value != localStorage.getItem("UN") || PWL.value != localStorage.getItem("PW")) {
        UNL.style.borderColor = "rgba(214, 22, 22, 0.76)";
        PWL.style.borderColor = "rgba(214, 22, 22, 0.76)";
    }
})
