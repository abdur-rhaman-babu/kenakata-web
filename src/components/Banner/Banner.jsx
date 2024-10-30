import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';
import { Navigation } from 'swiper/modules';
import slider1 from '../../assets/slider4.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider5.webp'
const Banner = () => {
  return (
    <div className='h-[400px] mt-20'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={slider1}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2}  alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3}  alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
