'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});
/*-----------------------------------*\
 * #style.css
\*-----------------------------------*/

/*-----------------------------------*\
 * #CUSTOM PROPERTY
\*-----------------------------------*/

:root {
  --rich-black-fogra-29: hsl(225, 25%, 9%);
  --rich-black-fogra-39: hsl(170, 21%, 5%);
  --raisin-black: hsl(228, 13%, 15%);
  --eerie-black: hsl(207, 19%, 11%);
  --light-gray: hsl(0, 3%, 80%);
  --gunmetal-1: hsl(229, 15%, 21%);
  --gunmetal-2: hsl(216, 22%, 18%);
  --gainsboro: hsl(0, 7%, 88%);
  --citrine: hsl(57, 97%, 45%);
  --xiketic: hsl(253, 21%, 13%);
  --gray-x: hsl(0, 0%, 74%);
  --white: hsl(0, 100%, 100%);
  --black: hsl(0, 0%, 0%);
  --jet: hsl(0, 0%, 20%);

  --ff-poppins: 'Poppins', sans-serif;

  --fs-1: 36px;
  --fs-2: 32px;
  --fs-3: 30px;
  --fs-4: 24px;
  --fs-5: 20px;
  --fs-6: 18px;
  --fs-7: 16px;
  --fs-8: 15px;
  --fs-9: 14px;
  --fs-10: 13px;
  --fs-11: 12px;
  --fs-12: 11px;

  --fw-500: 500;
  --fw-700: 700;

  --transition-1: 0.15s ease;
  --transition-2: 0.25s ease-in;
  --transition-3: 0.5s ease-out;

  --section-padding: 100px;
}

/*-----------------------------------*\
 * #RESET
\*-----------------------------------*/

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }
a { text-decoration: none; }
a, img, span, input, button, ion-icon { display: block; }
input {
  font: inherit;
  width: 100%;
  border: none;
}
select, button {
  font: inherit;
  background: none;
  border: none;
  cursor: pointer;
}
html {
  font-family: var(--ff-poppins);
  scroll-behavior: smooth;
}
body { background: var(--eerie-black); }
body.active { overflow: hidden; }

/*-----------------------------------*\
 * #REUSED STYLE
\*-----------------------------------*/

.container { padding-inline: 15px; }

.h1, .h2, .h3 {
  color: var(--white);
  line-height: 1.2;
}
.h1 { font-size: var(--fs-1); }
.h2 { font-size: var(--fs-2); }
.h3 { font-size: var(--fs-6); }

.section-subtitle {
  color: var(--citrine);
  font-size: var(--fs-11);
  font-weight: var(--fw-500);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  text-align: center;
}
.section-title { text-align: center; }

.badge {
  color: var(--white);
  font-size: var(--fs-12);
  font-weight: var(--fw-700);
  border: 2px solid transparent;
  padding: 2px 10px;
}
.badge-fill {
  background: var(--white);
  color: var(--raisin-black);
}
.badge-outline { border-color: var(--white); }

.meta-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px 25px;
  margin-bottom: 50px;
}
.badge-wrapper, .ganre-wrapper, .date-time {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px 10px;
}
.ganre-wrapper > a {
  color: var(--gainsboro);
  font-size: var(--fs-9);
  font-weight: var(--fw-500);
  transition: var(--transition-1);
}
.ganre-wrapper > a:is(:hover, :focus) { color: var(--citrine); }
.date-time { gap: 15px; }
.date-time > div {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--gainsboro);
  font-size: var(--fs-9);
  font-weight: var(--fw-500);
}
.date-time ion-icon {
  --ionicon-stroke-width: 50px;
  color: var(--citrine);
}

.btn {
  color: var(--white);
  font-size: var(--fs-11);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 30px;
  border: 2px solid var(--citrine);
  border-radius: 50px;
  transition: var(--transition-3);
  position: relative;
  overflow: hidden;
}
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--citrine);
  opacity: 0.2;
  transition: var(--transition-3);
}
.btn:hover::before { left: 0; }
.btn > ion-icon { font-size: 18px; }
.btn-primary { background: var(--rich-black-fogra-29); }
.btn-primary:is(:hover, :focus) {
  background: var(--citrine);
  color: var(--xiketic);
  transform: scale(1.05);
}

.movies-list {
  display: grid;
  gap: 50px;
}
.movie-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition-3);
}
.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);
}
.movie-card .card-banner {
  position: relative;
  background: var(--gunmetal-1);
  aspect-ratio: 2 / 3;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: var(--transition-3);
}
.movie-card .card-banner::after {
  content: "";
  position: absolute;
  inset: 0;
  transition: var(--transition-3);
}
.movie-card .card-banner:hover { box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.5); }
.movie-card .card-banner:hover::after { background: hsla(0, 0%, 100%, 0.1); }
.movie-card .card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-3);
}
.movie-card:hover .card-banner img { transform: scale(1.05); }
.movie-card .title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}
.movie-card .card-title {
  color: var(--white);
  font-size: var(--fs-7);
  transition: var(--transition-1);
}
.movie-card .card-title:is(:hover, :focus) { color: var(--citrine); }
.movie-card .title-wrapper time {
  color: var(--citrine);
  font-size: var(--fs-9);
  font-weight: var(--fw-500);
}
.movie-card .card-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}
.movie-card .badge { color: var(--citrine); }
.movie-card .duration { margin-left: auto; }
.movie-card :is(.duration, .rating) {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--gainsboro);
  font-size: var(--fs-11);
  font-weight: var(--fw-500);
}
.movie-card :is(.duration, .rating) ion-icon {
  font-size: 13px;
  --ionicon-stroke-width: 50px;
  color: var(--citrine);
}

.movies-list.has-scrollbar {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: inline mandatory;
  padding-bottom: 25px;
}
.has-scrollbar::-webkit-scrollbar { height: 8px; }
.has-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  box-shadow: 0 0 0 2px var(--citrine);
  border-radius: 10px;
}
.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--gainsboro);
  border-radius: 10px;
  box-shadow: inset 0 1px 0 var(--black), inset 0 -1px 0 var(--black);
}

/*-----------------------------------*\
 * #ANIMATIONS
\*-----------------------------------*/

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--transition-3), transform var(--transition-3);
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/*-----------------------------------*\
 * #POPUP
\*-----------------------------------*/

.popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 0.7);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}
.popup-content {
  background: var(--rich-black-fogra-29);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  position: relative;
  box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.5);
}
.popup-content h2 {
  color: var(--citrine);
  margin-bottom: 15px;
}
.popup-content p {
  color: var(--gainsboro);
  font-size: var(--fs-9);
}
.close-popup {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: var(--white);
  cursor: pointer;
  transition: var(--transition-1);
}
.close-popup:hover { color: var(--citrine); }

/*-----------------------------------*\
 * #HEADER
\*-----------------------------------*/

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 25px;
  transition: var(--transition-2);
  z-index: 4;
}
.header.active {
  background: var(--eerie-black);
  padding-block: 20px;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-actions { display: none; }
.menu-open-btn {
  color: var(--white);
  font-size: 40px;
}
.navbar {
  position: fixed;
  top: 0;
  right: -300px;
  background: var(--eerie-black);
  width: 100%;
  max-width: 300px;
  height: 100%;
  box-shadow: -1px 0 3px hsl(0, 0%, 0%, 0.2);
  transition: 0.15s ease-in;
  visibility: hidden;
  z-index: 3;
}
.navbar.active {
  right: 0;
  visibility: visible;
  transition: 0.25s ease-out;
}
.navbar-top {
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-close-btn {
  color: var(--white);
  font-size: 25px;
  padding: 5px;
}
.menu-close-btn ion-icon { --ionicon-stroke-width: 80px; }
.navbar-list {
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  margin-bottom: 30px;
}
.navbar-link {
  color: var(--white);
  font-size: var(--fs-8);
  font-weight: var(--fw-500);
  padding: 10px 25px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  transition: var(--transition-1);
}
.navbar-link:is(:hover, :focus) { color: var(--citrine); }
.navbar-social-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.navbar-social-link {
  font-size: 20px;
  color: var(--white);
  transition: var(--transition-1);
}
.navbar-social-link:is(:hover, :focus) { color: var(--citrine); }
.overlay {
  position: fixed;
  inset: 0;
  background: hsla(204, 18%, 11%, 0.8);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-2);
}
.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/*-----------------------------------*\
 * #HERO
\*-----------------------------------*/

.hero {
  background: url("../images/hero-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 750px;
  height: 100vh;
  max-height: 1000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-block: var(--section-padding);
}
.hero-content { margin-top: 60px; }
.hero-subtitle {
  color: var(--citrine);
  font-size: var(--fs-4);
  font-weight: var(--fw-700



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});