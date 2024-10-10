import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Comment.css";
import left from "../../assets/arrow-left.svg";
import nigora from "../../assets/Image/nigora.jpg";
import muhlisa from "../../assets/Image/muhlisa.webp";
import lobar from "../../assets/Image/lobar.jpg";
import barno from "../../assets/Image/barno.jpg";
import bonu from "../../assets/Image/bonu.jpg";
import samiya from "../../assets/Image/samiya.jpg";
import { t } from 'i18next';

function Comment() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className="teachers">
            <div className="container">
                <h2 className='teacher-title' data-aos="zoom-in">{t("feedHead")}</h2>
                <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={nigora} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name1")}</h3>
                                    <p className='user-text'>Telegram: @nigora_dostva</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info1")}" </p>
                        </div>

                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={muhlisa} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name2")}</h3>
                                    <p className='user-text'>Telegram: @prsens</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info2")}" </p>
                        </div>

                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={lobar} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name3")}</h3>
                                    <p className='user-text'>Telegram: @hyot</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info3")}" </p>
                        </div>

                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={barno} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name4")}</h3>
                                    <p className='user-text'>Telegram: @barno</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info4")}"</p>
                        </div>

                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={bonu} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name5")}</h3>
                                    <p className='user-text'>Telegram: @bonu_hamidova</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info5")}"</p>
                        </div>

                        <div className='teachers-card' data-aos="zoom-in">
                            <div className="infos-card">
                                <img className='user-img' src={muhlisa} alt="Error" />
                                <div>
                                    <h3 className='user-title'>{t("name6")}</h3>
                                    <p className='user-text'>Telegram: @samiya_smm</p>
                                </div>
                            </div>
                            <p className='teacher-about'>"{t("info6")}"</p>
                        </div>

                    </Slider>
                    <div className='arrows'>
                        <img onClick={previous} className='left-img' src={left} alt="Error" />
                        <img onClick={next} className='right-img' src={left} alt="Error" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;