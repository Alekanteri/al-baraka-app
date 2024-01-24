import React from "react";
import { motion } from "framer-motion";
import css from "./Available.module.scss";
import { fadeIn, textVariant } from "../../utils/motion";
import Phone1 from "../../assets/img/phone/1.jpg";
import Phone2 from "../../assets/img/phone/2.jpg";
import Phone3 from "../../assets/img/phone/3.webp";
import Phone4 from "../../assets/img/phone/4.jpg";
import Phone5 from "../../assets/img/phone/5.avif";
import Modal from "../Modal/Modal";

const Available = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span style={{ fontSize: "35px" }} className="primaryText">
              Популярные товары, которые берут в рассрочку
            </span>
          </div>
        </motion.div>

        <div className={`flexGrid ${css.showContainer}`}>
          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone1} alt="project" />
            <figcaption>
              <b>APPLE IPHONE 14 PRO 128GB</b> <br />
              <p className={css.price}>96 990 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>

          <motion.figure variants={fadeIn("up", "tween", 0.5, 0.6)}>
            <img width={200} src={Phone2} alt="project" />
            <figcaption>
              <b>APPLE IPHONE 14 PRO MAX 128GB</b> <br />
              <p className={css.price}>106 990 ₽</p>
              <button
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
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
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
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
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
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
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
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
                variants={fadeIn("up", "tween", 0.4, 1)}
                className={css.mainCallBtn}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Оформить рассрочку
              </button>
            </figcaption>
          </motion.figure>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Available;
