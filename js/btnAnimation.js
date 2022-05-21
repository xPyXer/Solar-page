// Interação do botão do Main
$(document).ready((e) => {
    $('.btnAnimation').on('mouseenter', function(e) { 
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    });
    $('.btnAnimation').on('mouseout', function(e) { 
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    });
});