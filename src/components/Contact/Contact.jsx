import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion.js";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import NumberInput from "./NumberInput.jsx";
import css from "./Contact.module.scss";

const Contact = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <motion.div variants={textVariant(0.5)} className={css.rightSide}>
      <h1>Оставьте заявку, мы свяжемся с вами для получения рассрочки</h1>
      <span>Выберите удобный для вас вид связи</span>
      <ul className={css.formContact}>
        <li
          onClick={() => activeClick(0)}
          className={activeIndex === 0 ? css.active : ""}
        >
          <FiPhoneCall /> <p>Звонок</p>
        </li>
        <li
          onClick={() => activeClick(1)}
          className={activeIndex === 1 ? `${css.active} background: red` : ""}
          style={activeIndex === 1 ? { background: "#2FACEA" } : null}
        >
          <FaTelegram
            color="#2FACEA"
            style={activeIndex === 1 ? { color: "white" } : null}
            size={23}
          />
          <p>Telegram</p>
        </li>
        <li
          onClick={() => activeClick(2)}
          className={activeIndex === 2 ? `${css.active}` : ""}
          style={activeIndex === 2 ? { background: "#3BC14A" } : null}
        >
          <IoLogoWhatsapp
            color="#3BC14A"
            style={activeIndex === 2 ? { color: "white" } : null}
            size={23}
          />
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
            <br />
            <NumberInput />
            <br />
            <input
              className={css.submitBtn}
              type="submit"
              value="Получить рассрочку"
              form="formname"
            />{" "}
            <br />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontSize: "15px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                Я согласен с{" "}
                <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                  {" "}
                  политикой конфиденциальности
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
