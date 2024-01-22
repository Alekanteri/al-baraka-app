import React from "react";
import { motion } from "framer-motion";
import css from "./Available.module.scss";
import {fadeIn,textVariant,} from "../../utils/motion";
import time from "../../assets/img/time.svg";
import Phone1 from "../../assets/img/phone/1.jpg";
import Phone2 from "../../assets/img/materials/860.jpg";
import Phone3 from "../../assets/img/phone/3.jpg";
import Phone4 from "../../assets/img/phone/4.jpg";
import Phone5 from "../../assets/img/phone/4.jpg";

const Available = () => {
  return (
    <section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "35px", textAlign: 'center'}} className="primaryText">
              Товары, доступные для покупки в рассрочку
            </span>
          </div>
        </motion.div>

        <div className={`flexGrid ${css.showCase}`}>
        <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone1} alt="project" />
            <figcaption>
              <b>Телефоны и электроника</b>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone2} alt="project" />
            <figcaption>
              <b>APPLE IPHONE 14 PRO MAX 128GB</b> <br />
              <p className={css.price}>106 990 ₽</p>
              <button
            
                className={css.mainCallBtn}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img
              width={250}
              style={{ marginTop: "6px" }}
              src={Phone3}
              alt="project"
            />
            <figcaption>
              <b>SAMSUNG GALAXY S23 ULTRA 12/256</b> <br />
              <p className={css.price}>90 990 ₽</p>
              <button
            
                className={css.mainCallBtn}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} height={250} src={Phone4} alt="project" />
            <figcaption>
              <b>XIAOMI REDMI NOTE 12 PRO 8/256</b> <br />
              <p className={css.price}>23 990 ₽</p>
              <button
            
                className={css.mainCallBtn}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={250} src={Phone5} alt="project" />
            <figcaption>
              <b>APPLE MACBOOK AIR 2022 M2 8/256</b> <br />
              <p className={css.price}>114 990 ₽</p>
              <button
            
                className={css.mainCallBtn}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={250} src={Phone5} alt="project" />
            <figcaption>
              <b>APPLE MACBOOK PRO 2022 M2 8/512</b> <br />
              <p className={css.price}>143 990 ₽</p>
              <button
            
                className={css.mainCallBtn}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>
        </div>
        <div className={css.availableFast}>
          <img src={time} alt="time" />
          <div className={css.availableFastText}>
            Примерное время рассмотрения заявки на рассрочку для новых клиентов
            <span style={{ fontWeight: "bold" }}> - 45 минут</span>
          </div>
          <h1>Узнайте, как мы работаем</h1>
          <div className={css.howContent}>
            <div className={css.howLeft}>
              <div className={css.howItem}>
                <span>
                  Наша деятельность основана на <br /> исламском контракте
                  Мурабаха
                </span>
              </div>
              <div className={css.howItem}>
                <span>
                  Штрафы, пени, сборы, страховки <br /> и скрытые платежи -
                  отсутствуют
                </span>
              </div>
            </div>
          </div>

          <div className={css.howContent}>
            <div className={css.howItem}>
              <span>
                Мы выкупаем необходимый Вам товар <br /> в магазине-партнере и
                перепродаем в <br /> рассрочку с фиксированной наценкой
              </span>
            </div>
            <div className={css.howItem}>
              <span>
                На всех тарифах действует <br /> фиксированный размер наценки{" "}
                <br /> на весь период рассрочки
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Available;
