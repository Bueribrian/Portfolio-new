window.onload = function() {
  window.__forceSmoothScrollPolyfill__ = true;

 document.querySelector('#irProyectos').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#practicas').scrollIntoView({ behavior: 'smooth' });
      });
      document.querySelector('#irProyectos2').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#practicas').scrollIntoView({ behavior: 'smooth' });
      });
  preloader.style.display = 'none'
  navBtn.addEventListener("click", btnNavBar);
  exitBtn.addEventListener("click", btnNavBar);
  header.addEventListener('mousemove',iconsGenerateCordenates)
};
var navMenu = document.querySelector(".list-links");
var navBtn = document.querySelector(".btn-navbar");
var exitBtn = document.querySelector(".exitBtn");
var preloader = document.querySelector('#preloader')
var header = document.querySelector('#header')

function iconsGenerateCordenates(e) {
  let x = e.clientX
  let y = e.clientY

  let icon1 = document.querySelector('.icon1')
  let icon2 = document.querySelector('.icon2')
  let icon3 = document.querySelector('.icon3')
  let icon4 = document.querySelector('.icon4')
  let icon5 = document.querySelector('.icon5')
  let icon6 = document.querySelector('.icon6')
  let icon7 = document.querySelector('.icon7')
  let icon8 = document.querySelector('.icon8')
  let icon9 = document.querySelector('.icon9')

    icon1.style.top =  5 + -y*.05 +'px'
    icon1.style.left =400 +x*.03 +'px'

    icon2.style.top =  0 + -y*.06 +'px'
    icon2.style.left =800 +x*.03 +'px'

    icon3.style.top = -60 + y*.06 +'px'
    icon3.style.left =100 +x*.03 +'px'

    icon4.style.top =  245 + -y*.06 +'px'
    icon4.style.left =25 +x*.03 +'px'

    icon5.style.top =  355 + -y*.06 +'px'
    icon5.style.left =950 +-x*.03 +'px'

    icon6.style.top =  450 + -y*.06 +'px'
    icon6.style.left =1474 +-x*.03 +'px'

    icon7.style.top =  1200 + -y*.06 +'px'
    icon7.style.left =424 +x*.03 +'px'

    icon8.style.top =  735 + -y*.06 +'px'
    icon8.style.left =1350 +x*.03 +'px'

    icon9.style.top =  789 + -y*.06 +'px'
    icon9.style.left =864 +x*.03 +'px'


  

}

function btnNavBar() {
  navMenu.style.transform === "translateX(0%)"
    ? (navMenu.style.transform = "translateX(-101%)")
    : (navMenu.style.transform = "translateX(0%)");
  navBtn.classList.toggle("clicked");
}
