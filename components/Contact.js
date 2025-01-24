"use client";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="contact"
    >
      <div className="kura_tm_contact w-full h-auto clear-both float-left bg-[#f9f9f9] px-0 pt-[140px] pb-[119px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Contact
            </span>
            <h3 className="font-extrabold uppercase">Contáctenos</h3>
          </div>
          <div className="contact_inner w-full h-auto clear-both float-left mt-[40px] flex">
            <div
              className="left w-1/2 pr-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="text w-full float-left mb-[42px]">
                <p>
                  Por favor, rellene el formulario de esta sección para ponerse
                  en contacto conmigo. O llame entre las 9:00 a. m. y las 8:00
                  p. m., hora del Este, de lunes a viernes.
                </p>
              </div>
              <div className="short w-full float-left">
                <ul>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/placeholder.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        Santo Domingo, República Dominicana
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/phone.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        +1 809 396 2749
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/mail.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        smartdev.dr@gmail.com
                      </span>
                    </div>
                  </li>
                  <li className="mb-[23px] w-full float-left">
                    <div className="list_inner w-full h-auto clear-both float-left relative pl-[30px]">
                      <img
                        className="svg absolute left-0 w-[18px] h-[18px] top-1/2 mt-[-1px] translate-y-[-50%] text-secondary-color"
                        src="assets/img/svg/globe.svg"
                        alt=""
                      />
                      <span className="text-[18px] text-black font-poppins">
                        https://smartdev.com.do
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="right w-1/2 pl-[100px] wow fadeInUp"
              data-wow-duration=".7s"
            >
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="name"
                          type="text"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="email"
                          type="text"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="kura_tm_button" data-position="left">
                    <a
                      href={`https://wa.me/18093962749?text=Nombre:${name} Correo:${email} Mensaje:${message}`}
                      target="_blank"
                    >
                      <span>WhatsApp</span>
                      <img
                        className="svg inline-block"
                        src="assets/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
