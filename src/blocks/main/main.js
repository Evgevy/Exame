$(document).ready(function () {
    $(".basic__burger").click(function(){
        $(".basic__line:nth-child(1)").toggleClass("basic__line--first")
        $(".basic__line:nth-child(2)").toggleClass("basic__line--middle")
        $(".basic__line:nth-child(3)").toggleClass("basic__line--last")
        $(".aside").toggleClass("aside--open")
    })
})