function wb1() {$("cm1").slideUp();$("wm1").fadeIn();$("wm1").delay(200).slideUp('slow');} 

function cb1() { $("cb1").hide();$("wb1").hide();$("ch1").fadeIn();
var sbox = document.getElementById('sbox'); var n = sbox.innerHTML; n++; sbox.innerHTML = n;$("wm1").slideUp();$("cm1").slideDown();}

function wb2() {$("cm2").slideUp();$("wm1").fadeIn();$("wm1").delay(200).fadeOut('slow');} 

function cb2() {$("cb2").hide();$("wb2").hide();$("ch2").fadeIn();
var sbox = document.getElementById('sbox'); var n = sbox.innerHTML; n++; sbox.innerHTML = n;$("wm1").slideUp();$("cm2").slideDown();}


function w3() {$("c3").slideUp();$("w3").slideUp();$("w3").slideDown();} function c3() {$("w1").slideUp();$("c3").slideDown();}

function w4() {$("c4").slideUp();$("w4").slideUp();$("w4").slideDown();} function c4() {$("w2").slideUp();$("c4").slideDown();}

function w5() {$("c5").slideUp();$("w5").slideUp();$("w5").slideDown();} function c5() {$("w1").slideUp();$("c5").slideDown();}

function w6() {$("c6").slideUp();$("w6").slideUp();$("w6").slideDown();} function c6() {$("w2").slideUp();$("c6").slideDown();}

function w7() {$("c7").slideUp();$("w7").slideUp();$("w7").slideDown();} function c7() {$("w1").slideUp();$("c7").slideDown();}

function w8() {$("c8").slideUp();$("w8").slideUp();$("w8").slideDown();} function c8() {$("w2").slideUp();$("c8").slideDown();}

function w9() {$("c9").slideUp();$("w9").slideUp();$("w9").slideDown();} function c9() {$("w1").slideUp();$("c9").slideDown();}

function w10() {$("c10").slideUp();$("w10").slideUp();$("w10").slideDown();} function c10() {$("w2").slideUp();$("c10").slideDown();}

function w11() {$("c11").slideUp();$("w11").slideUp();$("w11").slideDown();} function c11() {$("w1").slideUp();$("c11").slideDown();}

function w12() {$("c12").slideUp();$("w12").slideUp();$("w12").slideDown();} function c12() {$("w2").slideUp();$("c12").slideDown();}

function w13() {$("c13").slideUp();$("w13").slideUp();$("w13").slideDown();} function c13() {$("w1").slideUp();$("c13").slideDown();}

function w14() {$("c14").slideUp();$("w14").slideUp();$("w14").slideDown();} function c14() {$("w2").slideUp();$("c14").slideDown();}


$(document).ready(function(){
$(".goshowright").click(function(){
setTimeout(function() {$(".page-number-input").focus();}, 300);
$(".gotopagesection").slideToggle("fast");});});
