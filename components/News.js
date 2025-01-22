"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import { newsSlider } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const blogData = [
  {
    id: 1,
    title: "Inteligencia Artificial (IA) y Chatbots",
    date: "15 enero, 2025",
    author: "Chrome Developers Blog",
    img: "https://adnmedialab.com/wp-content/uploads/2022/01/inteligencia-artificial-y-chatbots-1.jpg-1.jpg",
    description: [
      "Google lanzó una actualización para Chrome 120 que incluye mejoras en el manejo de cookies de terceros y nuevas herramientas para desarrolladores, como un depurador mejorado para WebAssembly.",
    ],
  },
  {
    id: 2,
    title: "Diciembre 2024: Angular 17 es lanzado",
    date: "12 de diciembre de 2024",
    author: "Angular Blog",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFEnp_77P3M-Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707041661242?e=2147483647&v=beta&t=q-oNLS1sagGFUMTrPJHnWJCFsgtwAHqShxq2HGmSunE",
    description: [
      "Angular 17 llegó con soporte para signals, mejoras en SSR y optimización del tamaño de las aplicaciones.",
    ],
  },
  {
    id: 3,
    title: "Noviembre 2024: React 18.3 Beta disponible",
    date: "20 de noviembre de 2024",
    author: "React Blog",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYntQnw3N0CwoXo8bAG-yffr9bSPayObEEDA&s",
    description: [
      "React 18.3 Beta se enfoca en Server Components y manejo de estado.",
    ],
  },
  {
    id: 4,
    title: "Septiembre 2024: ChatGPT Plugins integrados en navegadores",
    date: "30 de septiembre de 2024",
    author: "OpenAI Blog",
    img: "https://cdn.prod.website-files.com/622611a2b23d0e6b270fba81/64f751c66c9b24f1da00afd3_Product%20GIFs%20(1200%20%C3%97%20630px)%20(16).png",
    description: [
      "OpenAI integró plugins de ChatGPT en navegadores populares.",
    ],
  },
];

const News = () => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const { modalToggle, setBlogModal } = useContext(context);

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="news"
    >
      <div className="kura_tm_news w-full h-auto clear-both float-left py-[140px] px-0">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              News
            </span>
            <h3 className="font-extrabold uppercase">Ultimas noticias</h3>
          </div>
          <div
            className="news_list w-full h-auto clear-both float-left pt-[92px] wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...newsSlider} className="swiper-container">
              {blogData.map((blog) => (
                <SwiperSlide className="swiper-slide" key={blog.id}>
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url={blog.img}
                        style={{ backgroundImage: `url(${blog.img})` }}
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-0 left-0 pr-[40px] pb-[40px] pl-[49px] transition-all duration-300">
                      <span className="font-poppins mb-[6px] inline-block">
                        {blog.date}
                      </span>
                      <h3 className="text-[20px] font-bold">{blog.title}</h3>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="kura_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current currentNews" />
                  <span className="pagination_progress">
                    <span className="all allNews">
                      <span />
                    </span>
                  </span>
                  <span className="total totalNews" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
