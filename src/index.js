import './style/normalize.css'
import './style/font.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';
import './style/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],
 spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 30000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        //nextEl: ".swiper-button-next",
       // prevEl: ".swiper-button-prev",
      },
});