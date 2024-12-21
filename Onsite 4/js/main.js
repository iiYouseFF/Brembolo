const SignUpBTN1 = document.getElementById("btn");
const SignUpBTN2 = document.getElementById("btn-2");
const p = document.getElementById("UserName");
const H = document.getElementById("H");
const Products = document.getElementById("P");
const S = document.getElementById("S");
const C = document.getElementById("C");
const Path = window.location.pathname;
const Home = Path.match(/index/);
const Ps = Path.match(/Products/);
const Services = Path.match(/Services/);
const Contact = Path.match(/contact/);

if (Home != null) {
    H.classList.add("active")
    Products.classList.remove("active")
    S.classList.remove("active")
    C.classList.remove("active")
}
if (Ps != null) {
    H.classList.remove("active")
    Products.classList.add("active")
    S.classList.remove("active")
    C.classList.remove("active")
}
if (Services != null) {
    H.classList.remove("active")
    Products.classList.remove("active")
    S.classList.add("active")
    C.classList.remove("active")
}
if (Contact != null) {
    H.classList.remove("active")
    Products.classList.remove("active")
    S.classList.remove("active")
    C.classList.add("active")
}
function ChangeHREF() {
    window.location.href = "../HTML/login.html"
}
const flag = localStorage.getItem("flag")
if (flag == "loggedin"){
    SignUpBTN1.style.display = "none"
    SignUpBTN2.style.display = "none"
    p.textContent = `${localStorage.getItem("UN")}`
}
if (flag != "loggedin") {
    p.style.display = "none"
    SignUpBTN1.style.display = "none"
    SignUpBTN2.style.display = "none"
}
SignUpBTN1.addEventListener("click" , ChangeHREF)
SignUpBTN2.addEventListener("click" , ChangeHREF)