/*NAVIGATION*/
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
    }
}

/*MENU SORT*/
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

/*ANIME*/

let mainHeader = document.querySelector('.main-header');
mainHeader.innerHTML = mainHeader.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
  .add({
    targets: '.main-header .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.main-header .letter',
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  /*SCROLL MAGIC*/

  $(document).ready(function() {
        let controller = new ScrollMagic.Controller();

        //build a scene

        let ourScene = new ScrollMagic.Scene({
            triggerElement: '.joinUsContainer',
            offset: -600
        })
        .setClassToggle('.joinUsContainer', 'slide-up')
        .addTo(controller);
  });

  $(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    //build a scene

    let ourScene = new ScrollMagic.Scene({
        triggerElement: '.domuSelectionLeft',
        offset: -400
    })
    .setClassToggle('.domuSelectionLeft', 'slide-left')
    .addTo(controller);
});

$(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    //build a scene

    let ourScene = new ScrollMagic.Scene({
        triggerElement: '.domuSelectionRight',
        offset: -400
    })
    .setClassToggle('.domuSelectionRight', 'slide-right')
    .addTo(controller);
});

$(document).ready(function() {
    let controller = new ScrollMagic.Controller();

    //build a scene

    let ourScene = new ScrollMagic.Scene({
        triggerElement: '.aboutContainer',
        offset: -400
    })
    .setClassToggle('.aboutContainer', 'fade-in')
    .addTo(controller);
});

