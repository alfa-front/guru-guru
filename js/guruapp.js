$(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(window).bind("orientationchange", test);
    } else {
        $(window).bind("resize", test);
    }

    function test() {
        browserWidth = $('body').innerWidth();
        browserHeight = $('body').innerHeight();

        if (browserWidth > 1500) {
            numberGurus = 18;
            insertLogo = 8;
        } else if (browserWidth < 1499 && browserWidth > 1200) {
            numberGurus = 14;
            insertLogo = 6;
        } else if (browserWidth < 1199 && browserWidth > 980) {
            numberGurus = 12;
            insertLogo = 5;
        } else if (browserWidth < 979 && browserWidth > 768) {
            numberGurus = 10;
            insertLogo = 4;
        } else if (browserWidth < 767 && browserWidth > 480) {
            numberGurus = 8;
            insertLogo = 3;
        } else if (browserWidth < 479) {
            numberGurus = 6;
            insertLogo = 2;
        }

        widthEachGuru = browserWidth / numberGurus;
        numberRows = browserHeight / widthEachGuru;
        numberRows = Math.ceil(numberRows);
        numRows = numberRows + 2;

        $('#guruContainer').empty();

        for (var r = 0; r < numRows; r++) {
            for (var i = 0; i < numberGurus; i++) {
                random = Math.floor((Math.random() * 200) + 50);
                $('#guruContainer').append('<div class="guru" data-0="background-color: rgba(255, 255, 255, 0.9);" data-' + random + '="background-color: rgba(255, 255, 255, 0);"></div>');
            }
        }

        $('.guru').width(widthEachGuru + 'px');
        $('.guru').height(widthEachGuru + 'px');

        /* espace #footer */
        footerPadding = browserHeight + widthEachGuru * 2;
        $('#footer').css('padding-top', footerPadding + 'px');
        /* positionnement du logo */
        moreinfoHeight = $("#moreInfo").height();
        logoHeight = $(".logo").height();
        logoWidth = $(".logo").width();
        $('.logo').css('top', (browserHeight - moreinfoHeight) / 2 - (logoHeight / 2));
        $('.logo').css('margin-left', -logoWidth / 2);

    }

    test();



    // random colors
    colors = Array("#001cf0", "#fff600", "#00657e", "#36d5ff", "#fa313a");
    logos = Array("images/logos/logo_bleu.png", "images/logos/logo_jaune.png", "images/logos/logo_vert.png", "images/logos/logo_ciel.png", "images/logos/logo_rouge.png");
    colorNames = Array("bleu", "jaune", "vert", "ciel", "rouge");

    random = Math.floor(Math.random() * colors.length);

    var color = colors[2];
    var logo = logos[2];
    var colorName = colorNames[2];

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