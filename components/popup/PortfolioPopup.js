"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopupContainer from "./PopupContainer";
const PortfolioPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  console.log(portfolioModal);
  return (
    <PopupContainer nullValue={setPortfolioModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={portfolioModal.hero}
            style={{ backgroundImage: 'url("assets/img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3 className="text-[20px] font-bold mb-[4px]"> {portfolioModal?.title}</h3>
          <a href={portfolioModal?.page} target="_blank">
            <span className="font-poppins">Ver detalle</span>
          </a>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              {portfolioModal?.description}
            </p>

          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Cliente</span>
                <span>{portfolioModal?.client}</span>
              </li>
              <li>
                <span className="first">Categoria</span>
                <span>
                  <a href="#">{portfolioModal?.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Ultima actualización</span>
                <span>{portfolioModal?.date}</span>
              </li>
              <li>
                <span className="first">Share</span>
                {portfolioModal.social.map((item, index) => {

                  return (
                    <ul className="share">
                      <li>
                        <a href={item.link} target="_blank">
                          <img
                            className="svg"
                            src={item.icon}
                            alt
                          />
                        </a>
                      </li>

                    </ul>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            {portfolioModal.images.map((item, index) => {
              return (
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="assets/img/thumbs/4-2.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url={item.src}
                        style={{
                          backgroundImage: 'url("assets/img/portfolio/1.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}

          </ul>
        </div>
      </div>
    </PopupContainer>
  );
};
export default PortfolioPopup;
