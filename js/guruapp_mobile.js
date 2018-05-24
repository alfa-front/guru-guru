$(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(window).bind("orientationchange", test);
    } else {
        $(window).bind("resize", test);
    }

    function test() {
        browserWidth = $('body').innerWidth();
        browserHeight = $('body').innerHeight();

        /* espace #footer */
        footerHeight = $('#moreInfo').height();
        footerPadding = browserHeight - footerHeight;
        //$('#footer').css('padding-top', footerPadding + 'px');
        /* positionnement du logo */
        moreinfoHeight = $("#moreInfo").height();
        logoHeight = $(".logo").height();
        logoWidth = $(".logo").width();
        $('.logo').css('top', (browserHeight - moreinfoHeight) / 2 - (logoHeight / 2));
        $('.logo').css('margin-left', -logoWidth / 2);

    }

    test();


    // turq, vert, bleu, jaune, orange, rouge, rose
    colors = Array("#1abc9c", "#00657e", "#3498db", "#f1c40f", "#f39c12", "#c0392b", "#e74c3c");
    logos = Array("images/logos/logo_turq.png", "images/logos/logo_vert.png", "images/logos/logo_bleu.png", "images/logos/logo_jaune.png", "images/logos/logo_orange.png", "images/logos/logo_rouge.png", "images/logos/logo_rose.png");
    colorNames = Array("turq", "vert", "bleu", "jaune", "orange", "rouge", "rose");

    random = Math.floor(Math.random() * colors.length);

    var color = colors[random];
    var logo = logos[random];
    var colorName = colorNames[random];

    $(".logo").attr("src", logo);

    $(window).bind("orientationchange", function () {
        $(".logo").attr("src", logo)
    });
    $(window).bind("resize", function () {
        $(".logo").attr("src", logo)
    });

    $('.slogan').addClass(colorName);
    $('h2').addClass(colorName);
    $('p').addClass(colorName);
    $('a').addClass(colorName);
    $('.gurupoint ').addClass(colorName);

    $('h2').css('color', color);
    $('a').css('color', color);
    $('.gurupoint').css('background', color);

    $('.more').mouseover(function () {
        $('.more').css('border-color', color);
        $('.more').css('color', color);
    }).mouseout(function () {
        $('.more').css('border-color', '#343434');
        $('.more').css('color', '#343434');
    });



});