import "./Banner.css";
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/blue_headphones.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="banner_main">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 400000, // 4 seconds delay, instead of 400000
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >
          {/* **************************** */}
          <SwiperSlide>
            <div className="container-fluid banner_1 py-5">
              <div className="container gx-0">
                <div className="row gx-0 align-items-center">
                  <div
                    className="col-md-12 col-lg-6"
                    // data-aos="fade-right"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                  >
                    <div className="banner_col1 pt-md-4 =">
                      <h6 className="main_label pb-3"><i class="fa-solid fa-star"></i>  Top Products of The Month</h6>
                      <h1 className="mt-4" >Micropack MHP Headphone Black</h1>
                      <p className="py-3">
                        Discover optimal well-being through tailored exercises.
                        Achieve a healthy body with our expert guidance.
                      </p>
                      <div className="banner_btns">
                        <button className="main_btn btn0"> Show Now</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 col-lg-6"
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                  >
                    <div className="banner_col2">
                      <img src={img1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* **************************** */}
          <SwiperSlide>
            <div className="container-fluid banner_2 py-5">
              <div className="container gx-0">
                <div className="row gx-0 align-items-center">
                  {/* Image column on the left now */}
                  <div
                    className="col-md-12 col-lg-6"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <div className="banner_col2 pt-md-4">
                      <img src={img2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  {/* Text column on the right now */}
                  <div
                    className="col-md-12 col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <div className="banner_col1 pt-md-4 =">
                      <h6 className="main_label pb-3"><i class="fa-solid fa-star"></i>  Top Products of The Month</h6>
                      <h1 className="mt-4" >Micropack MHP Headphone Black</h1>
                      <p className="py-3">
                        Discover optimal well-being through tailored exercises.
                        Achieve a healthy body with our expert guidance.
                      </p>
                      <div className="banner_btns">
                        <button className="main_btn btn0"> Show Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
