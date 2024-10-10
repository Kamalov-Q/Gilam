import React from "react";
import "./Home.css";
import MiniPic from "../../assets/Image/hero-min.png";
import HeroPic from "../../assets/Image/hero-main.png";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home_flex">
            <div className="home_left">
              <div className="home_hero_top">

                <ScrollAnimation animateIn="bounceInLeft">
                <h1 className="home_title">{t("hometitle")} </h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInLeft">
                <p className="home_info">{t("homedesc")}</p>
                </ScrollAnimation>

                <div className="mini_pic_home">
                  <img
                    className="mini_home_img"
                    src={MiniPic}
                    alt="mini main image"
                  />
                </div>
              </div>
              <ScrollAnimation animateIn="bounceInLeft">
              <a href="#contact">
              <button className="custom-btn_home btn-11_home btn_hm_H">
                  {t("homeBtn")}<div className="dot"></div>
              </button>
              </a>
              </ScrollAnimation>
            </div>

            <div className="home_right">
              <img className="home_rightpic" src={HeroPic} alt="Main image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
