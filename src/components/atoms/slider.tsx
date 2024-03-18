import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderAtomProps {
  settings?: SliderSettings;
  children?: React.ReactNode;

}

interface SliderSettings {
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: Array<{ breakpoint: number; settings: SliderSettings }>;
}

const SliderAtom: React.FC<SliderAtomProps> = ({ settings, children }) => {
  const defaultSettings: SliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    ...settings,
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default SliderAtom;
