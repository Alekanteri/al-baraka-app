import React from "react";
import { motion } from "framer-motion";
import css from "./Available.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import time from "../../assets/img/time.svg";

import logo1 from "../../assets/svg/how/1.svg";
import logo2 from "../../assets/svg/how/2.svg";
import logo3 from "../../assets/svg/how/3.svg";
import logo4 from "../../assets/svg/how/4.svg";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "35px" }} className="primaryText">
              Товары, доступные для покупки в рассрочку
            </span>
          </div>
        </motion.div>

        <div className={`${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./7.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./8.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./9.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./10.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./11.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./12.png"
            alt="project"
          />
        </div>
        <div className={css.availableFast}>
          <img src={time} alt="time" />
          <div className={css.availableFastText}>
            Примерное время рассмотрения заявки на рассрочку для новых клиентов
            <span style={{ fontWeight: "bold" }}> - 45 минут</span>
          </div>
          <h1>Узнайте, как мы работаем</h1>
          <div className={css.howContent}>
            <div className={css.howItem}>
              <p>Наша деятельность основана на исламском контракте Мурабаха</p>
              <img src={logo1} alt="" />
            </div>
            <div className={css.howItem}>
              <p>
                Штрафы, пени, сборы, страховки и скрытые платежи - отсутствуют
              </p>
              <img src={logo2} alt="" />
            </div>
            <div className={css.howItem}>
              <p>
                Мы выкупаем необходимый Вам товар в магазине-партнере и
                перепродаем в рассрочку с фиксированной наценкой
              </p>
              <img src={logo3} alt="" />
            </div>
            <div className={css.howItem}>
              <p>
                На всех тарифах действует фиксированный размер наценкb на весь
                период рассрочки
              </p>
              <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
