

$(document).ready(function() {
    $('.plates_section, .sweets_section, .drinks_section').hide();

    $('#menuButton1').click(function(){
        $('.plates_section').hide();
        $('.sweets_section').hide();
        $('.drinks_section').hide();
        $('.ramen_section').show();
    });
    $('#menuButton2').click(function(){
        $('.ramen_section').hide();
        $('.sweets_section').hide();
        $('.drinks_section').hide();
        $('.plates_section').show();

    });
    $('#menuButton3').click(function(){
        $('.ramen_section').hide();
        $('.plates_section').hide();
        $('.drinks_section').hide();
        $('.sweets_section').show();
    });
    $('#menuButton4').click(function() {
        $('.ramen_section').hide();
        $('.plates_section').hide();
        $('.sweets_section').hide();
        $('.drinks_section').show();
    });
});