var winn = document.querySelector(".win");
var nss = document.querySelector(".nss-1");
var winn2 = document.querySelector(".win2");
var nss2 = document.querySelector(".nss-2");
var winn3 = document.querySelector(".win3");
var nss3 = document.querySelector(".nss-3");
var winn4 = document.querySelector(".win4");
var nss4 = document.querySelector(".nss-4");
var winn5 = document.querySelector(".win5");
var nss5 = document.querySelector(".nss-5");
var winn6 = document.querySelector(".win6");
var nss6 = document.querySelector(".nss-6");

winn.addEventListener("click", () => {
    if (nss.classList.contains("active")) {
        nss.style.height = "0";
    } else {
        nss.style.height = "fit-content";  
    }
    nss.classList.toggle("active");
});

winn2.addEventListener("click", () => {
    if (nss2.classList.contains("active")) {
        nss2.style.height = "0";
    } else {
        nss2.style.height = "fit-content";  
    }
    nss2.classList.toggle("active");
    
});

winn3.addEventListener("click", () => {
    if (nss3.classList.contains("active")) {
        nss3.style.height = "0";
    } else {
        nss3.style.height = "fit-content";  
    }
    nss3.classList.toggle("active");
});

winn4.addEventListener("click", () => {
    if (nss4.classList.contains("active")) {
        nss4.style.height = "0";
    } else {
        nss4.style.height = "fit-content";  
    }
    nss4.classList.toggle("active");
});

winn5.addEventListener("click", () => {
    if (nss5.classList.contains("active")) {
        nss5.style.height = "0";
    } else {
        nss5.style.height = "fit-content"; 
    }
    nss5.classList.toggle("active");
});

winn6.addEventListener("click", () => {
    if (nss6.classList.contains("active")) {
        nss6.style.height = "0";
    } else {
        nss6.style.height = "fit-content";  
    }
    nss6.classList.toggle("active");
});

