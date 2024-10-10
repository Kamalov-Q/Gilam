import { FaPhoneVolume } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdDeliveryDining, MdDryCleaning } from "react-icons/md";
import { GiRedCarpet } from "react-icons/gi";

import "./Process.css";
import { t } from 'i18next'

const Process = () => {
    return (
        <div className="container">
            <div className='process_main'>
                <div className='process_header'>{t("procHead")}</div>
                <div className='process_body_row'>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <FaPhoneVolume color="green" size={40} />
                            <span className='process_body_row_title'>{t("procH1")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn1")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <FaTruckFast color="green" size={45} />
                            <span className='process_body_row_title'>{t("procH2")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn2")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <FaFileContract size={40} color="green" />
                            <span className='process_body_row_title'>{t("procH3")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn3")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <GiRedCarpet size={50} color="green" />
                            <span className='process_body_row_title'>{t("procH4")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn4")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <GiVacuumCleaner size={50} color="green" />
                            <span className='process_body_row_title'>{t("procH5")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn5")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <MdDryCleaning size={45} color="green" />
                            <span className='process_body_row_title'>{t("procH6")}</span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn6")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <div className='process_col_body'>
                            <MdDeliveryDining size={45} color="blue" />
                            <span className='process_body_row_title'>{t("procH7")}
                            </span>
                        </div>
                        <div className='process_col_info'>
                            {t("procIn7")}
                        </div>
                    </div>
                    <div className='process_body_row_col'>
                        <button className='process_btn'>
                            <a href="#contact" style={{ color: "white", textDecoration: "none" }}>{t("btnInfo")}</a>
                        </button>
                        <div className='process_col_info'>{t("lastIn")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
