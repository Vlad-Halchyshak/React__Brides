import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import style from './Slider.module.css'
import vito1 from '../../images/vito1.jpg'


const photos = [
  {
    name: 'Photo 1',
    url: 'https://p4.wallpaperbetter.com/wallpaper/460/638/339/the-godfather-wallpaper-preview.jpg'
  },
  {
    name: 'Photo 2',
    url: 'https://c4.wallpaperflare.com/wallpaper/51/361/92/don-vito-corleone-wallpaper-preview.jpg'
  },
  {
    name: 'Photo 3',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhvBbGdof0dbT_qH0bH_tRaZmX4EdTLvHnlMe0OUgrbV1DDMR-&usqp=CAU'
  },
  {
    name: 'Photo 4',
    url: 'https://c4.wallpaperflare.com/wallpaper/604/206/550/the-godfather-monochrome-marlon-brando-vito-corleone-wallpaper-preview.jpg'
  }
]


class CoolSlider extends Component {
  render() {

    const settings = {

      dots: true,
      infinte: true,
      speed: 6000,
      arrows: true,
      centerMode: true,
      autoplaySpeed: 6000,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1,
      breakpoint: 100,
      className: "slides",

    }
    return (
      <div className={style.Slider}>
        <h3>Vito's Photo</h3>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div className={style.img}>
                <img width="80%" heigth="50%" src={photo.url} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}


export default CoolSlider