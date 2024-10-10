import React from "react";
import "./Service.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import all from "../../assets/Image/all.png"
import gilam from "../../assets/Image/gilam.png"
import adyol from "../../assets/Image/adyol.png"
import mebel from "../../assets/Image/mebel.png"
import parda from "../../assets/Image/parda.png"

function Service() {

  const [t, i18next] = useTranslation();

  const serviceData = [
    {
      id: 1,
      title: t("servicetypecardtitle1"),
      desc: t("servicetypecardtext1"),
      picture: all,
      duration: 1.5,
    },
    {
      id: 2,
      title: t("servicetypecardtitle2"),
      desc: t("servicetypecardtext2"),
      picture: mebel,
      duration: 1.6,
    },
    {
      id: 3,
      title: t("servicetypecardtitle3"),
      desc: t("servicetypecardtext3"),
      picture: parda,
      duration: 1.7,
    },
    {
      id: 4,
      title: t("servicetypecardtitle4"),
      desc: t("servicetypecardtext4"),
      picture: gilam,
      duration: 1.8,
    },
    {
      id: 5,
      title:  t("servicetypecardtitle5"),
      desc:  t("servicetypecardtext5"),
      picture: adyol,
      duration: 1.9,
    },
  ];

  return (
    <>
      <section className="service" id="serv">
        <div className="container"> 
          <ScrollAnimation animateIn="flipInX">
            <h2 className="service_title">{t("servicetype")}</h2>
          </ScrollAnimation>
          <div className="service_flex">
            {serviceData.map((items) => {
              return (
                <ScrollAnimation
                  key={items.id}
                  animateIn="bounceInLeft"
                  delay={items.duration}
                >
                  <span key={items.id}>
                    <div className="service_cards">
                         <div className="service_card_img_box">
                        <img
                          className="sercive_img"
                          src={items.picture}
                          alt="salom"
                        />
                      </div>
                      <div className="service-infos">
                        <h3 className="service_card_title">{items.title}</h3>
                        <a href="#contact">
                        <button className="custom-btn_ser-card btn-11_ser-card service_card_btn">
                          {t("cleanhBtn")}<div className="dot"></div>
                        </button>
                      </a>
                      </div>
                 
                   
                    </div>
                  </span>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
