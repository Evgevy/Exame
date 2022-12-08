$(document).ready(function(){
    $(".status").click(function(){
        $(this).siblings(".aside__examp").toggleClass("aside__examp--open")
        $(this).siblings(".skills__skills").toggleClass("skills__skills--open")
        $(this).siblings(".hobbi__hobbis").toggleClass("hobbi__hobbis--open")
    })
})