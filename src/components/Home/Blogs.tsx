// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "../UI/Button";
import style from "../../style/bolgs.module.scss";

const Blog = () => {
  const posts = [
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: "/logo-image-3.png",
      date: "Olivia Rhye * 20 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: "/logo-image-2.png",
      date: "Phoenix Baker * 19 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: "/logo-image.png",
      date: "Alec Whitten * 17 Jan 2022",
      href: "",
    },
    {
      title: "Blog Title goes here",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      img: "/logo-image-4.png",
      date: "Olivia Rhye * 20 Jan 2022",
      href: "",
    },
  ];

  return (
    <section id="blog" className={style.blog}>
      <div className={style.blog_container}>
        <div className={style.heading}>
          <Button additionalClass={style["w-fit"]} text="Our Blog" />

          <h3>
            A 360<sup>o</sup> tour with the <br></br> best places for you!
          </h3>
        </div>
        <p className={style["heading-text"]}>
          Discover trends and news about the best restaurants, hotels, and
          shopping places.
        </p>
      </div>
      <div className={style["blog_slider-container"]}>
        <div className={style["slider-btn-container"]}>
          <div className={`${style["slider-btn"]}  review-swiper-button-prev `}>
            <img src="/arrow-sm-left-svgrepo-com.svg" alt="prev-arrow" />
          </div>
          <div className={`${style["slider-btn"]} review-swiper-button-next `}>
            <img src="/arrow-sm-right-svgrepo-com.svg" alt="next-arrow" />
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 2,
            },
            990: {
              width: 990,
              slidesPerView: 3,
            },
          }}
          className={style["my-swipper"]}
        >
          {posts.map((item, idx) => (
            <SwiperSlide key={idx}>
              <li key={item.title}>
                <img src={item.img} alt={item.title} />
                <div className={style["card-body"]}>
                  <span className={style.date}>{item.date}</span>
                  <div className={style["title-box"]}>
                    <legend>{item.title}</legend>
                    <a href={item.href}>
                      <img src="/arrow-up-right-svgrepo-com.svg" alt="arrow" />
                    </a>
                  </div>

                  <p className={style.text}>{item.desc}</p>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
