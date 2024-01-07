import { useState } from "react";
import css from "./Spline.module.scss";
import "../../styles/global.scss";

export default function SplineApp() {
  const [width, setWidth] = useState(window.innerWidth / 2.5);

  window.onresize = () => {
    setWidth(window.innerWidth / 2.5);
  };

  return (
    <div className="innerWidth">
      <div className={css.spline}>
        <div className={css.container}>
          <div className={css.splienLeft}>
            <h1
              style={{ fontSize: width / 15, marginBottom: "1rem" }}
              className="primaryText"
            >
              Кому подходит наша рассрочка?
            </h1>
            <ul>
              <li>Вы живете на территории Республики Ингушетия</li>
              <li>Вы достигли возраста в 21 год</li>
              <li>
                Вы имеете постоянный доход: официальный, неофициальный, пособие
                или пенсия
              </li>
            </ul>
          </div>
          <div className={css.splineRight}>
            <img width={width} src="./mac.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
