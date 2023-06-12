import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade, Navigation, } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import './Carousel.css'
import LazyLoad from "react-lazy-load";

const Carousel = () => {
    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <LazyLoad><img className="w-full h-[450px] relative" src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" /></LazyLoad>
                    <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-10">
                        <h3 className="lg:text-5xl text-white font-extrabold uppercase text-center">Welcome to <span className="block">Playfit Sports</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoad><img className="w-full h-[450px] relative" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1490&q=80" /></LazyLoad>
                    <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-10">
                        <h3 className="lg:text-5xl text-white font-extrabold uppercase text-center">Welcome to <span className="block">Playfit Sports</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <LazyLoad><img className="w-full h-[450px] relative" src="https://images.unsplash.com/photo-1616041042832-24ee0dff18d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" /></LazyLoad>
                    <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-10">
                        <h3 className="lg:text-5xl text-white font-extrabold uppercase text-center">Welcome to <span className="block">Playfit Sports</span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;