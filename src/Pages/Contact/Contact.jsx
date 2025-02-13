import { useState } from "react";
import "./Contact.css";
import CImg from "../../assets/Image/contact.png";
import ScrollAnimation from "react-animate-on-scroll";
import Congrulation from "../../assets/Image/congt.png";
import { RiCloseCircleFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import carpImg from '../../assets/Image/carp.png'

function Contact() {
  const [t] = useTranslation();

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState(``);

  const [succesM, setSuccesM] = useState(false);
  const succesStatus = 200;

  const handleSucces = () => {
    setSuccesM(!succesM);
    setTimeout(() => {
      setSuccesM(false);
    }, 5000)
  }

  let bot = {
    TOKEN: "6196010078:AAFp_QxzIIVposuwGiwr_39zFgS8uQS2MZA",
    chatID: "-1001877467590",
    message: `
      Assalomu alaykum. Sizga yangi buyurtma keldi!%0A
      %0AIsmi 👤: ${nameValue};
      %0ATelefon raqami ☎: ${"+"}${numberValue};`,
  };

  function sendZakaz(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success.status == succesStatus) {
          handleSucces()
        }
      },
      (error) => {
        console.log(error);
      }
    );
    setNameValue("");
    setNumberValue("");
  }

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact_flex">
            <ScrollAnimation animateIn="bounceInLeft" duration={1.1}>
              <div className="contact_left">
                <h2 className="contact_title">{t("contactTitle")}</h2>
                <form className="contact_form" onSubmit={(e) => sendZakaz(e)}>
                  <input
                    required
                    value={nameValue}
                    className="contact_input"
                    type="text"
                    placeholder={t("contactinputTextname")}
                    onChange={(e) => setNameValue(e.target.value)}
                  />


                  <label className="def_plus">
                    <input
                      required
                      value={numberValue}
                      className="contact_input contact_number"
                      type="number"
                      placeholder="998-90-123-45-67"
                      defaultValue="998"
                      onChange={(e) => setNumberValue(e.target.value)}
                    />
                    <span className="def_plusa">+</span>
                  </label>

                  <button id="con_btn" className="contact_send_btn">{t("contactButton")}</button>
                </form>
              </div>
            </ScrollAnimation>
            <div className="contact_right">
              <img className="contact_img" src={carpImg}  alt="pic" />
            </div>
          </div>
        </div>
      </section>
      <div className={`${succesM ? "well_done" : null} contact_sucses_modal_box`} onClick={() => setSuccesM(!succesM)} >
        <div className="contact_succes">
          <h3 className="contact_succes_title">
            {t("modalText")}
          </h3>
          <img src={Congrulation} alt="xsdds" />
          <RiCloseCircleFill className="contact_succes_close" onClick={() => setSuccesM(!succesM)} />
        </div>
      </div>
    </>
  );
}

export default Contact;
