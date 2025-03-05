import './style/normalize.css'
import './style/font.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


function widthListener() {
    let width = document.body.clientWidth;

    if (width >= 768) {
        swiper.destroy()
    }
}

widthListener();

window.addEventListener('resize', () => {
    widthListener();
});



const timer = document.querySelector(".discount__timer");

var minute = 10;
var sec = 0;
setInterval(function () {
    timer.innerHTML = `
    <span>00</span>
    <span>:</span>
    <span>${minute}</span>
    <span>:</span>
    <span>${sec}</span>
    `;
    sec--;
    if (sec < 0) {
        minute--;
        sec = 59;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    if (sec == 0 && minute == 0) {
        minute = 10;
    }
}, 1000);