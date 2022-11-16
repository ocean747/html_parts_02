// console.log("0819は晴れ");

$(function () {
    $('.main__ul').hide();
    $('#btn-v1').click(function () {
        $(".main__ul").slideToggle(600);
    });
});

$(function () {
    $('h2').hide();
    $('#btn-v2').click(function () {
        $("h2").slideToggle(600);
    }),$("h2").addClass("color-red");
});

// $(function () {
//     $(".main__items-1").animate({
//         width: '300px',
//         height: '200px'
//     },5000);
// });

$(function () {
    $(".main__items-1").click(function() {
        $(this).animate({
            width: '200px',
            height: '200px'
        });
    });
    
    });