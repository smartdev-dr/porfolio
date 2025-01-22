const TimeLine = () => {
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="timeline"
    >
      <div className="kura_tm_timeline w-full h-auto clear-both float-left px-0 pt-[140px] pb-[113px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Team
            </span>
            <h3 className="font-extrabold uppercase">Equipo de desarrollo</h3>
          </div>
          <div className="timeline_list w-full h-auto clear-both float-left pt-[54px]">
            <ul>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    Inicio de Contacto
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Levantamiento de la idea o proyecto
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    CEO, JOSHUA MARTE GARCIA
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    Diseño
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Senior UX & UI Designer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Angel Rodrigez
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    Desarrollador Web
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Desarrollador Web
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Julio Cesar Robles
                  </span>
                </div>
              </li>
              <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    Desarrollador Movil
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Desarrollo y despliegue de aplicaciones móviles
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Luis Rodrigez
                  </span>
                </div>
              </li>
              {/* <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    March, 2010 - July, 2012
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Junior UX Designer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Simono Design Group, London
                  </span>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
