//@prepros-append jq-start.js
//@prepros-append jq-end.js

  //для бургера в меню (додає клас active)


  let menuIcon = document.querySelector('.header-menu__icon');
  function active(){
    menuIcon.classList.toggle('active');
    const headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.toggle('active');
  }
  menuIcon.addEventListener('click', active);

    // Те саме на jQuery

    // $('.icon-menu').click(function(event){
    //   $(this).toggleClass('active');
    //   $('.menu__body').toggleClass('active');
    //   $('body').toggleClass('lock');
    // });

    //вичислення ширини екрана

    const headerMenu = document.querySelector('.header-menu');
    const headerTop = document.querySelector('.header-top');
    const lang = document.querySelector('.header-top-lang');
    const headerBottomMenuRight = document.querySelector('.header-bottom-menu__right');
    const headerBottomMenuLeft = document.querySelector('.header-bottom-menu__left');
    const headerBootom = document.querySelector('.header-bottom');
    const headerBootomChilds = headerBootom.children;
window.addEventListener('resize', function(event){
  let w = document.documentElement.clientWidth;
  if(w<752){
    headerMenu.append(lang);
    headerMenu.append(headerBottomMenuLeft);
    headerMenu.append(headerBottomMenuRight);
    
  } else if(w>752){
    headerTop.prepend(lang);
    for(let i = 0; i < headerBootomChilds.length; i++){
      if (i == 0){
        headerBootomChilds[i].append(headerBottomMenuLeft);
      } else if (i == 2){
        headerBootomChilds[i].append(headerBottomMenuRight);
      }
      
    }
  }
  

});




// вставка картинки фоном///////////////
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
  ////////////////////////////////////////


  // налаштування слайдера Slick

  // $(document).ready(function(){
  //   $('.slider__body').slick({
  //     dots: true,
  //     arrows:false,
  //     accessibility: false,
  //     slidesToShaw: 1,
  //     autoplaySpeed: 3000,
  //     adaptiveHeight: true,
  //     nextArrow:'<button type="button" class"slick-next"></button>',
  //     prevArrow:'<button type="button" class"slick-prev"></button>',
  //     responsive:[{
  //       breakpoint: 768,
  //       settings:{}
  //     }]
  //   });
  // });


  // Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 49.163734, lng: 26.408494};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

