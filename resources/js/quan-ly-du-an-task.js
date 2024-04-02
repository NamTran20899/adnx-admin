$(document).ready(function(){
    $('#toggleBtn1').click(function(){
        $('#content1').slideToggle();
        
    });
    $('#toggleBtn2').click(function(){
        $('#content2').slideToggle();
    });
});

$(document).ready(function(){
    $('#toggleBtn-1').click(function(){
        $('#content-1').slideToggle();
        $('#content-3').slideToggle();
        
    });
    $('#toggleBtn-2').click(function(){
        $('#content-2').slideToggle();
    });
    $('#toggleBtn-3').click(function(){
        $('#content-4').slideToggle();
    });
});

// Flag
var flagColors = ["red", "yellow", "black"];
//
var flagIcon = document.getElementById("flagIcon");
var savedColor = localStorage.getItem("currentColor");
if (savedColor) {
    flagIcon.style.color = savedColor;
}
function changeColor() {
    var currentColor = flagIcon.style.color;
    var currentIndex = flagColors.indexOf(currentColor);
    var nextIndex = (currentIndex + 1) % flagColors.length;
    var nextColor = flagColors[nextIndex];
    flagIcon.style.color = nextColor;
    localStorage.setItem("currentColor", nextColor);
}
//
var flagIcon1 = document.getElementById("flagIcon1");
var savedColor1 = localStorage.getItem("currentColor1");
if (savedColor1) {
    flagIcon1.style.color = savedColor1;
}
function changeColor1() {
    var currentColor1 = flagIcon1.style.color;
    var currentIndex1 = flagColors.indexOf(currentColor1);
    var nextIndex1 = (currentIndex1 + 1) % flagColors.length;
    var nextColor1 = flagColors[nextIndex1];
    flagIcon1.style.color = nextColor1;
    localStorage.setItem("currentColor1", nextColor1);
}
//
var flagIcon2 = document.getElementById("flagIcon2");
var savedColor2 = localStorage.getItem("currentColor2");
if (savedColor2) {
    flagIcon2.style.color = savedColor2;
}
function changeColor2() {
    var currentColor2 = flagIcon2.style.color;
    var currentIndex2 = flagColors.indexOf(currentColor2);
    var nextIndex2 = (currentIndex2 + 1) % flagColors.length;
    var nextColor2 = flagColors[nextIndex2];
    flagIcon2.style.color = nextColor2;
    localStorage.setItem("currentColor2", nextColor2);
}
//
var flagIcon3 = document.getElementById("flagIcon3");
var savedColor3 = localStorage.getItem("currentColor3");
if (savedColor3) {
    flagIcon3.style.color = savedColor3;
}
function changeColor3() {
    var currentColor3 = flagIcon3.style.color;
    var currentIndex3 = flagColors.indexOf(currentColor3);
    var nextIndex3 = (currentIndex3 + 1) % flagColors.length;
    var nextColor3 = flagColors[nextIndex3];
    flagIcon3.style.color = nextColor3;
    localStorage.setItem("currentColor3", nextColor3);
}
//
var flagIcon4 = document.getElementById("flagIcon4");
var savedColor4 = localStorage.getItem("currentColor4");
if (savedColor4) {
    flagIcon4.style.color = savedColor4;
}
function changeColor4() {
    var currentColor4 = flagIcon4.style.color;
    var currentIndex4 = flagColors.indexOf(currentColor4);
    var nextIndex4 = (currentIndex4 + 1) % flagColors.length;
    var nextColor4 = flagColors[nextIndex4];
    flagIcon4.style.color = nextColor4;
    localStorage.setItem("currentColor4", nextColor4);
}
//
var flagIcon5 = document.getElementById("flagIcon5");
var savedColor5 = localStorage.getItem("currentColor5");
if (savedColor5) {
    flagIcon5.style.color = savedColor5;
}
function changeColor5() {
    var currentColor5 = flagIcon5.style.color;
    var currentIndex5 = flagColors.indexOf(currentColor5);
    var nextIndex5 = (currentIndex5 + 1) % flagColors.length;
    var nextColor5 = flagColors[nextIndex5];
    flagIcon5.style.color = nextColor5;
    localStorage.setItem("currentColor5", nextColor5);
}
//
var flagIcon6 = document.getElementById("flagIcon6");
var savedColor6 = localStorage.getItem("currentColor6");
if (savedColor6) {
    flagIcon6.style.color = savedColor6;
}
function changeColor6() {
    var currentColor6 = flagIcon6.style.color;
    var currentIndex6 = flagColors.indexOf(currentColor6);
    var nextIndex6 = (currentIndex6 + 1) % flagColors.length;
    var nextColor6 = flagColors[nextIndex6];
    flagIcon6.style.color = nextColor6;
    localStorage.setItem("currentColor6", nextColor6);
}
//
var flagIcon7 = document.getElementById("flagIcon7");
var savedColor7 = localStorage.getItem("currentColor7");
if (savedColor7) {
    flagIcon7.style.color = savedColor7;
}
function changeColor7() {
    var currentColor7 = flagIcon7.style.color;
    var currentIndex7 = flagColors.indexOf(currentColor7);
    var nextIndex7 = (currentIndex7 + 1) % flagColors.length;
    var nextColor7 = flagColors[nextIndex7];
    flagIcon7.style.color = nextColor7;
    localStorage.setItem("currentColor7", nextColor7);
}
//
var flagIcon8 = document.getElementById("flagIcon8");
var savedColor8 = localStorage.getItem("currentColor8");
if (savedColor8) {
    flagIcon8.style.color = savedColor8;
}
function changeColor8() {
    var currentColor8 = flagIcon8.style.color;
    var currentIndex8 = flagColors.indexOf(currentColor8);
    var nextIndex8 = (currentIndex8 + 1) % flagColors.length;
    var nextColor8 = flagColors[nextIndex8];
    flagIcon8.style.color = nextColor8;
    localStorage.setItem("currentColor8", nextColor8);
}
//
var flagIcon9 = document.getElementById("flagIcon9");
var savedColor9 = localStorage.getItem("currentColor9");
if (savedColor9) {
    flagIcon9.style.color = savedColor9;
}
function changeColor9() {
    var currentColor9 = flagIcon9.style.color;
    var currentIndex9 = flagColors.indexOf(currentColor9);
    var nextIndex9 = (currentIndex9 + 1) % flagColors.length;
    var nextColor9 = flagColors[nextIndex9];
    flagIcon9.style.color = nextColor9;
    localStorage.setItem("currentColor9", nextColor9);
}
//
var flagIcon10 = document.getElementById("flagIcon10");
var savedColor10 = localStorage.getItem("currentColor10");
if (savedColor10) {
    flagIcon10.style.color = savedColor10;
}
function changeColor10() {
    var currentColor10 = flagIcon10.style.color;
    var currentIndex10 = flagColors.indexOf(currentColor10);
    var nextIndex10 = (currentIndex10 + 1) % flagColors.length;
    var nextColor10 = flagColors[nextIndex10];
    flagIcon10.style.color = nextColor10;
    localStorage.setItem("currentColor10", nextColor10);
}



