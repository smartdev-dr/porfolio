"use client";
import { context } from "@/context/context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    title: "Desarrollador web",
    img: "assets/img/service/1.jpg",
    description1:
      "El proceso de desarrollo web comienza con una fase de planificación y análisis en la que se definen los objetivos del sitio y se investigan las necesidades del mercado y los usuarios. En esta etapa, se recogen los requisitos funcionales, como las características específicas que el sitio debe tener, y se establece el diseño preliminar del proyecto, considerando la identidad visual de la empresa.",
    description2:
      "Una vez definidos los requerimientos, se avanza al diseño y desarrollo del sitio web. El diseño incluye la creación de una estructura de navegación (wireframes) y el diseño visual, mientras que el desarrollo abarca la construcción del front-end (interfaz de usuario) y el back-end (servidor, bases de datos y lógica de negocio). Además, se integran funcionalidades adicionales, como formularios, pagos en línea y sistemas de gestión de contenido, asegurando una experiencia fluida y dinámica para los usuarios.",
    description3:
      "Finalmente, el sitio web pasa por un proceso de pruebas y optimización para garantizar su correcto funcionamiento. Se realizan pruebas de compatibilidad, rendimiento y usabilidad en distintos dispositivos y navegadores. Después del despliegue, se lleva a cabo un mantenimiento continuo que incluye actualizaciones de contenido, monitoreo de seguridad y ajustes para mejorar la experiencia del usuario, asegurando que el sitio siga siendo relevante y eficiente con el tiempo.",
  },
  {
    id: 2,
    title: "Desarrollador Movil",
    img: "assets/img/service/2.jpg",
    description1:
      "El proceso de desarrollo y despliegue de una app móvil se compone de varias etapas clave. Inicia con la planificación, donde se definen los objetivos de la aplicación, las funcionalidades necesarias y el público objetivo. Luego, se diseña la interfaz de usuario (UI) y la experiencia de usuario (UX), creando prototipos que reflejan la navegación y el estilo visual de la app.",
    description2:
      "En la fase de desarrollo, se programan las funcionalidades tanto del front-end como del back-end, integrando bases de datos, servicios en la nube y APIs según sea necesario. Una vez lista, la app pasa por pruebas rigurosas para identificar y corregir errores, garantizar la compatibilidad con dispositivos y optimizar su rendimiento.",
    description3:
      "Finalmente, la app se despliega en tiendas como Google Play y App Store, cumpliendo con los requisitos técnicos de cada plataforma. Después del lanzamiento, se realiza un mantenimiento continuo, que incluye actualizaciones para corregir errores, agregar nuevas funcionalidades y adaptarse a las necesidades de los usuarios.",
  },
  {
    id: 3,
    title: "Desarrollador backend",
    img: "assets/img/service/3.png",
    description1:
      "El proceso de desarrollo backend comienza con la planificación, donde se definen los requisitos del sistema, las funcionalidades necesarias y la estructura de datos. En esta etapa, se seleccionan tecnologías adecuadas, como el lenguaje de programación, frameworks y bases de datos, según las necesidades del proyecto.",
    decription2:
      "En la fase de desarrollo, se construyen las APIs, la lógica del servidor y las conexiones con bases de datos. También se implementan medidas de seguridad, como autenticación, autorización y protección contra ataques comunes. El código se organiza para garantizar escalabilidad, mantenibilidad y un rendimiento eficiente.",
    description3:
      "Finalmente, se realizan pruebas exhaustivas para validar la funcionalidad, la seguridad y el rendimiento del backend. Tras superar las pruebas, el sistema se despliega en un servidor o en la nube y se realiza un mantenimiento continuo para aplicar actualizaciones, solucionar problemas y optimizar el servicio.",
  },
];

const Hero = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="home"
    >
      <div className="kura_tm_hero w-full min-h-[100vh] float-left clear-both bg-[#f9f9f9]">
        <div className="container min-h-full">
          <div className="content w-full min-h-[100vh] flex items-center relative">
            <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <h2 className="name inline-block mb-[16px] text-secondary-color font-poppins font-medium" style={{ fontSize: 16 }}>
                Soluciones tecnológicas para empresas
              </h2>
              <h1 className="job text-[45px] font-extrabold leading-[1.4] uppercase mb-[25px]">
                Desarrollo de Software a Medida
              </h1>
              <div className="services w-full h-auto clear-both float-left mb-[35px]">
                <ul>
                  {services.map((service) => (
                    <li className="w-full float-left" key={service.id}>
                      <a
                        className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setServiceModal(service);
                        }}
                      >
                        <img className="image" src={service.img} alt="" />
                        <span>{service.title}</span>
                        <img
                          className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="short_info w-full h-auto clear-both float-left">
                <ul>
                  <li className="mr-[50px] mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <span className="text-[45px] font-semibold" >10+</span>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        años de
                        <br />
                        Experiencia
                      </span>
                    </div>
                  </li>
                  <li className="mb-[15px] py-0 inline-block">
                    <div className="list_inner flex items-center">
                      <h3 className="text-[45px] font-semibold">100+</h3>
                      <span className="font-poppins pl-[15px] inline-block leading-[1.4] relative top-[-3px] text-[14px]">
                        Proyectos
                        <br />
                        Realizados
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 text-right pl-[200px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <div className="image relative">
                <img
                  className="min-w-full relative opacity-0"
                  src="assets/img/thumbs/3-4.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                  data-img-url="assets/img/hero/4.jpg"
                />
                <div className="shape bg-image(url('assets/img/hero/4.jpg'))" />
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img
                  className="svg"
                  src="assets/img/svg/down-arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
