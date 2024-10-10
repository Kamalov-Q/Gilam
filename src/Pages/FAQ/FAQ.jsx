import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

function FAQ() {

  const [t, i18next] = useTranslation();

  const faqData = [
    {
      id: 1,
      title: t("question1"),
      descs: t("answer1"),
      handleFaq: false,
    },

    {
      id: 2,
      title: t("question2"),
      descs: t("answer2"),
      handleFaq: false,
    },

    {
      id: 3,
      title: t("question3"),
      descs: t("answer3"),
      handleFaq: false,
    },
    {
      id: 4,
      title: t("question4"),
      descs: t("answer4"),
      handleFaq: false,
    },
    {
      id: 5,
      title: t("question5"),
      descs: t("answer5"),
      handleFaq: false,
    },
    {
      id: 6,
      title: t("question6"),
      descs: t("answer6"),
      handleFaq: false,
    }
  ];

  const [hadleFaq, setHandleFaq] = useState(false);
  const [id, setId] = useState([])

  return (
    <>
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq_flex">
            <h2 className="faq_main_title">{t("faqtitle")}</h2>
            <div className="faq_acrr_div">
              {faqData.map((items) => {
                return (
                  <div className={`${id == items.id ? "openAcc" : null} accardion`} key={items.id}>
                    <div className="accardion_head" onClick={() => {
                      setHandleFaq(!hadleFaq)
                      setId(items.id);
                    }}>
                      <h4 className="faq_title">{items.title}</h4>
                      <div className="faq_icon_div">
                        <MdOutlineKeyboardArrowDown
                          className="faq_acc_icon"

                        />
                      </div>
                    </div>
                    <div className="accardion_body">
                      <p className="faq_desc">{items.descs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
