"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import { portfolioSlider } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const { setPortfolioModal, modalToggle } = useContext(context);
  const data = [
    {
      title: "Software de gestión de proyectos de construcción",
      description: "El Software permite crear proyectos y gestionarlos de manera eficiente y sencilla. El software permite la creación de proyectos de construcción, gestión de proyectos, Inventario, Compras, Ventas, Contizacones, facturación, cuentas por cobrar.",
      client: "Mike Pichardo Santana",
      category: "Desarollo aplicación web",
      date: "Enero 2025",
      page: "https://mkg-front-main-production.up.railway.app/",
      social: [
        {
          name: "Instagram",
          icon: "assets/img/svg/social/instagram.svg",
          link: "https://www.instagram.com/mikrog_ingenieria/",
        }
      ]
    }
  ]

  const mkgPortfolio =
  {
    title: "Software de gestión de proyectos de construcción",
    description: "El Software permite crear proyectos y gestionarlos de manera eficiente y sencilla. El software permite la creación de proyectos de construcción, gestión de proyectos, Inventario, Compras, Ventas, Contizacones, facturación, cuentas por cobrar.",
    client: "Mike Pichardo Santana",
    category: "Desarollo aplicación web",
    date: "Enero 2025",
    page: "https://mkg-front-main-production.up.railway.app/",
    hero: "assets/img/portfolio/1mk.png",
    images: [
      {
        src: "assets/img/portfolio/2mk.png",
        alt: ""
      },
      {
        src: "assets/img/portfolio/3mk.png",
        alt: ""
      },
      {
        src: "assets/img/portfolio/4mk.png",
        alt: ""
      }
    ],
    social: [
      {
        name: "Instagram",
        icon: "assets/img/svg/social/instagram.svg",
        link: "https://www.instagram.com/mikrog_ingenieria/",
      }
    ]
  }

  const enterPorfolio =
  {
    title: "Sistema de gestión de empleados de construcción",
    description: "El Software permite registrar los empleados y para poder registrar el acceso del personal en la obra, El sistema web permite monitorear cuantos empleados hay en obra en tiempo real y gestionar el acceso de los empleados. (Permisos, Visitas, Pagos del personal de casa etc.), La aplicacion movil permite escanear el QR del empleado para registrar las entradas y salidas",
    client: "Edwin Marmolejos",
    category: "Desarollo aplicación web - App Mobile - Backend",
    date: "Enero 2025",
    page: "https://app.enter.com.do/Login",
    hero: "assets/img/portfolio/2En.png",
    images: [
      {
        src: "assets/img/portfolio/1En.png",
        alt: ""
      },
      {
        src: "assets/img/portfolio/3En.png",
        alt: ""
      },
      {
        src: "assets/img/portfolio/4En.png",
        alt: ""
      }
    ],
    social: [

    ]
  }

  const InverAgroportfolio = {
    title: "Sistema de contabilidad y facturación remota",
    description: "La Software permite la gestión de la contabilidad y facturación de clientes, así como la gestión de los activos de las empresas. La Aplicación permite a los choferes(distribuidores) realizar facturas y cotizaciones permitiendo conectarse a Impresoras Laser Bluetooth para la entrega de facturas",
    client: "Aramis ",
    category: "Desarollo aplicación web - App Mobile - Backend",
    date: "Enero 2025",
    page: "https://app.enter.com.do/Login",
    hero: "assets/img/portfolio/1IA.png",
    images: [
      {
        src: "assets/img/portfolio/2IA.png",
        alt: ""
      },
      // {
      //   src: "assets/img/portfolio/2IA.png",
      //   alt: ""
      // },
      // {
      //   src: "assets/img/portfolio/4En.png",
      //   alt: ""
      // }
    ],
    social: [

    ]
  }
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="portfolio"
    >
      <div className="kura_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[140px] pb-[138px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Projects
            </span>
            <h3 className="font-extrabold uppercase">Algunos proyectos que hemos trabajado</h3>
          </div>
          <div
            className="portfolio_list w-full h-auto clear-both float-left pt-[92px] gallery_zoom wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...portfolioSlider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/0mk.png"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Sistema de gestión de proyectos de construcción
                      </h3>
                      <span className="font-poppins">Detalle</span>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(mkgPortfolio);
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/0LP.jpg"
                      />
                    </div>
                    <a href="https://do.logicpaq.com/app/" target="_blank">

                      <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    </a>
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        App de Logicpaq
                      </h3>
                      <span className="font-poppins">Detalle</span>
                    </div>
                    <a
                      href="https://do.logicpaq.com/app/"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/0En.png"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Sistema de gestión de empleados de construcción
                      </h3>

                      <span className="font-poppins">Detalle</span>

                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(enterPorfolio);
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/0IA.png"
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                        Sistema de Contabilidad 
                      </h3>

                      <span className="font-poppins">Detalle</span>

                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5] portfolio_popup"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setPortfolioModal(InverAgroportfolio);
                      }}
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url="assets/img/portfolio/0GH.webp"
                      />
                    </div>
                    <a href="https://github.com/joshuamg41" target="_blank">

                      <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    </a>
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-[41px] left-[49px] transition-all duration-300">
                      <h3 className="text-[20px] font-bold mb-[4px]">
                      mas proyectos
                      </h3>
                      <span className="font-poppins">Visite </span>
                    </div>
                    <a
                      href="https://do.logicpaq.com/app/"
                    />
                  </div>
                </SwiperSlide>
              
              </div>
              <div className="kura_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current portfolio_cureent" />
                  <span className="pagination_progress">
                    <span className="all">
                      <span />
                    </span>
                  </span>
                  <span className="total" />
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
export default Portfolio;
