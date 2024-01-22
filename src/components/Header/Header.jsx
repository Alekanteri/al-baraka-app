import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
      <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          className={`bg-primary paddings ${css.wrapper}`}
          viewport={{ once: true, amount: 0.25 }}
          style={{boxShadow: headerShadow}}
      >
        <div className={`innerWidth ${css.container} flexCenter`}>
          <div className={css.name}>
            <div className={css.alBarakaContainer}>
              <img width={60} src={logo} alt="logo"/>
              <span className={css.alBarakaText}>
              Al-Baraka <br/>{" "}
                <p style={{fontSize: "10px"}}>РАССРОЧКА БЕЗ БАНКА</p>
            </span>
            </div>
          </div>
          <ul
              className={`flexCenter ${css.menu}`}
              ref={menuRef}
              style={getMenuStyles(menuOpened)}
          >
            <li>
              <a href="#experties">Подать заявку</a>
            </li>
            <li>
              <a href="#work">О нас</a>
            </li>
            <li>
              <a href="#portfolio">Популярные</a>
            </li>
            <li>
              <a href="#people">партнеры</a>
            </li>
            <li className={`flexCenter ${css.phone}`}>
              <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a>
              <BiPhoneCall size={"40px"}/>
            </li>
          </ul>

          <div
              className={css.menuIcon}
              onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30}/>
          </div>
        </div>
      </motion.div>
  );
};

export default Header;

