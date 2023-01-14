import { Component } from '@angular/core';
import { Carousel } from 'src/app/data/carousel';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

  Images: Array<Carousel> = [
    {
      src: '../../../assets/carousel/slide1.jpg',
      alt: 'Image 1',
    }, {
      src: '../../../assets/carousel/slide2.jpg',
      alt: 'Image 2'
    }, {
      src: '../../../assets/carousel/slide3.jpg',
      alt: 'Image 3'
    }, {
      src: '../../../assets/carousel/slide4.jpg',
      alt: 'Image 4'
    } 
  ]
  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 20
  };  

}
