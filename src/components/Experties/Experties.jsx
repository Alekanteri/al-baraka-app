import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Experties = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeClick = (index) => {
    setActiveIndex(index);
  };

  return (
      <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
        >
          <div className={css.leftSide}>
            {projectExperience.map((exp, i) => {
              return (
                  <motion.div
                      variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                      className={css.exp}
                      key={i}
                  >
                    <div style={{background: exp.bg}} className="flexCenter">
                      <exp.icon size={25} color="white"/>
                    </div>
                    <div>
                      <span>{exp.name}</span>
                      <span className="secondaryText">{exp.projects}</span>
                    </div>
                  </motion.div>
              );
            })}
          </div>

          <motion.div variants={textVariant(0.5)} className={css.rightSide}>
            <h1>Оставьте заявку, мы свяжемся с вами для получения рассрочки</h1>
            <span>Выберите удобный для вас вид связи</span>
            <ul className={css.formContact}>
              <li
                  onClick={() => activeClick(0)}
                  className={activeIndex === 0 ? css.active : ""}
              >
                <FiPhoneCall/> <p>Звонок</p>
              </li>
              <li
                  onClick={() => activeClick(1)}
                  className={
                    activeIndex === 1 ? `${css.active} background: red` : ""
                  }
                  style={activeIndex === 1 ? {background: '#2FACEA'} : null}
              >
                <FaTelegram color="#2FACEA" style={activeIndex === 1 ? {color: 'white'} : null} size={23}/>
                <p>Telegram</p>
              </li>
              <li
                  onClick={() => activeClick(2)}
                  className={activeIndex === 2 ? `${css.active}` : ""}
                  style={activeIndex === 2 ? {background: '#3BC14A'} : null}

              >
                <IoLogoWhatsapp color='#3BC14A' style={activeIndex === 2 ? {color: 'white'} : null} size={23}/>
                <p>WhatsApp</p>
              </li>
            </ul>
            <div>
              <div className={css.consultFormContent}>
                <div>
                  <input
                      type="text"
                      name="name"
                      required
                      placeholder="Введите Ваше имя"
                  />{" "}
                  <br/>
                  <input
                      type="text"
                      name="phone"
                      placeholder="Введите Ваш номер телефона"
                  />
                  <br/>
                  <input
                      className={css.submitBtn}
                      type="submit"
                      value="Получить рассрочку"
                      form="formname"
                  />{" "}
                  <br/>
                  <div style={{textAlign: 'center'}}>
                  <span style={{fontSize: "15px", display: 'flex', justifyContent: 'center', gap: '5px'}}>
                    Я согласен с <p style={{textDecoration: 'underline', cursor: 'pointer'}}> политикой конфиденциальности</p>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
  );
};

export default Experties;
