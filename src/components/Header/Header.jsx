import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import svgLogo from "../../assets/logo-svg.svg";

const Header = () => {
  const headerShadow = useHeaderShadow();

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleChangeMenu = () => {
    setIsOpen(!isOpen);
  };

  window.onresize = () => {
    setWidth(window.innerWidth);
    if (width <= 900) {
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`${css.navbar}`}>
        <div className={css.name}>
          <img src={svgLogo} />
          Al Baraka
        </div>
        <ul className={`${css.links}`}>
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={css.links}>
            <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a>
            <BiPhoneCall size={"30px"} />
          </li>
        </ul>
        <div className={css.menuIcon}>
          <BiMenuAltRight
            style={{ cursor: "pointer" }}
            size={30}
            onClick={handleChangeMenu}
          />
        </div>
      </div>
      <div className={`${css.dropDownMenu} ${isOpen ? css.open : ""}`}>
        <ul className={`${css.links}`}>
          <li>
            <a href="#experties">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`${css.links}`}>
            <a href="tel:+7 (938) 007-37-77">+7 (938) 007-37-77</a>
            <BiPhoneCall size={"30px"} />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
