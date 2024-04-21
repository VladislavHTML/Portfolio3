$(document).ready(function(){
$('.burger').click(function(event) {
$('.menu,.open').toggleClass('active');
$('body').toggleClass('lock');  
});
});
$(function(){
$("#date").mask("99/99/9999");
$("#phone").mask("+7(999) 99-99-999")
$("#phone1").mask("+7(999) 99-99-999");
 });








