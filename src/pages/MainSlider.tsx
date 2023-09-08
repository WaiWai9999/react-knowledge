import React,{useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/mainSlider.css';
import image00 from '../assets/images/nature00.jpg';
import image01 from '../assets/images/nature01.jpg';
import image02 from '../assets/images/nature02.jpg';

const MainSlider = () => {
  const [currentImageName, setCurrentImageName] = useState('Mountain');
  const [textColor, setTextColor] = useState('red');
  // Handle slider change when the user interacts with the carousel
  const handleSlideChange = (index: number) => {
    if(index === 0){
      setCurrentImageName('Mountain');
      setTextColor('red');
    }else if(index === 1){
      setCurrentImageName('Garden');
      setTextColor('blue');
    }else if(index === 2){
      setCurrentImageName('Forest');
      setTextColor('green');
    }
  };

  const settings = {
    dots: true, // ナビゲーションドットを表示するかどうか
    dotsClass: "custom-slick-dots", // カスタムクラスをドットに適用するためのクラス名
    infinite: true, // スライドを無限にループさせるかどうか
    slidesToShow: 1, // 1回に表示するスライドの数
    slidesToScroll: 1, // 1回にスクロールするスライドの数
    autoplay: true, // 自動再生を有効にするかどうか
    autoplaySpeed: 3200, // 自動再生時のスライド切り替えの速さ（ミリ秒）
    speed: 1000, // スライドのトランジションアニメーションの速さ（ミリ秒）
    pauseOnHover: false, // ホバー時に自動再生を一時停止するかどうか
    afterChange: (index: number) => {
      handleSlideChange(index); // スライドが変更された後に実行されるコールバック関数
    },
  };

  return (
    <div className = "SliderContainer">
     <h2 className="Title">Welcome to React Slider!</h2>
      <Slider className= "SliderSection" {...settings}>
        <img className= "SlideImage" src= {image00} alt="Slide image1"></img>
        <img className= "SlideImage" src= {image01} alt="Slide image2"></img>
        <img className= "SlideImage" src= {image02} alt="Slide image3"></img>
      </Slider>
        <p>
          The current slide is{' '}
         <span style={{ color: textColor, fontSize: "24px", fontWeight: 600 }}>{currentImageName}</span>.
        </p>  
      </div>
  );
};

export default MainSlider;