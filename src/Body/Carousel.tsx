import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="title">물빠진 청바지!</div>
          <div className="subtitle">
            이제 막 도착한 패션 청바지를 구경해 보세요.
          </div>
          <img
            src={"https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg"}
            alt="fashion"
          />
          <Link className="button" to={"/fashion"}>
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title">신속한 업무처리!</div>
          <div className="subtitle">다양한 디지털 상품을 둘러보세요.</div>
          <img
            src={"https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg"}
            alt="digital"
          />
          <Link to={"/digital"} className="button">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title">신선한 식품!</div>
          <div className="subtitle">
            농장 직배송으로 더욱 신선한 식료품을 만나보세요.
          </div>
          <img
            src={"https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg"}
            alt="grocery"
          />
          <Link to={"/grocery"} className="button">
            바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
