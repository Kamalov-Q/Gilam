import React from "react";
import "./CleanH.css";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

function CleanH() {
  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="clean-h">
        <div className="container">
          <div className="clean-h_flex">
            <div className="clean-h_tr"></div>
            <div className="clean_info_fath">
              <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                <h2 className="clean-h_title">{t("cleanhtitle")}</h2>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInLeft" duration={1.1}>
                <p className="clean-h_text">{t("cleanhtext")}</p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInLeft" duration={1.2}>
              <p className="clean-phone">998-95-000-30-80</p>
              <p className="clean-phone"> 998-99-060-30-80</p>           
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInLeft" duration={1.3}>
                <a href="#contact">
                <button className="custom-btn_home btn-11_home">
                {t("cleanhBtn")}<div className="dot"></div>
                </button>
                </a>
              </ScrollAnimation>
              {/* <a className="clean-h_contact_link" href="#contact">
                {t("cleanhBtn")}
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanH;
