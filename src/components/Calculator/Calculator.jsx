import React, { useState } from "react";
import css from "./Calculator.module.scss";
import "../../styles/global.scss";

const Calculator = () => {
  const [count, setCount] = useState(8000);
  const [month, setMonth] = useState(2);
  const [firstPayment, setFistPayment] = useState(0);
  const [monthPayment, setMonthPayment] = useState(0);
  const [murkUp, setMurkUp] = useState(0);
  const [result, setResult] = useState(0);
  const [discount, setDiscount] = useState(true);

  const firstPaymentCalculation = async () => {
    const firstPaymentcalc = (count / 100) * 30;
    setFistPayment(firstPaymentcalc);
  };

  const resultCalculation = async () => {
    const resultCalc = count + (count / 100) * (discount ? 2 : 3 * month);
    setResult(resultCalc);
  };

  const monthPaymentCalculation = async () => {
    const monthPaymentcalc = (result - firstPayment) / 2;
    setMonthPayment(monthPaymentcalc);
  };

  const murkUpCalculation = async () => {
    const murkUpcalc = result - count;
    setMurkUp(murkUpcalc);
  };

  const func = async () => {
    await resultCalculation();
    await firstPaymentCalculation();
    await monthPaymentCalculation();
    await murkUpCalculation();
  };

  return (
    <>
      <div className={css.calculationContainer}>
        <h1 className={css.title}>Рассчитайте свою персональную рассрочку</h1>
        <div className={css.calculatorBody}>
          <form onChange={func}>
            <div className={css.discountBody}>
              <div
                className={`${css.discountBtn} ${
                  discount ? css.activeBtn : ""
                }`}
                onClick={() => {
                  setDiscount(true);
                }}
              >
                Идеал
              </div>
              <div
                className={`${css.discountBtn} ${
                  !discount ? css.activeBtn : ""
                }`}
                onClick={() => {
                  setDiscount(false);
                }}
              >
                Стандарт
              </div>
            </div>
            <label>Стоимость товара: {count}</label>
            <input
              type="range"
              min={8}
              max={200}
              defaultValue={8}
              onChange={(e) => setCount(e.target.value * 1000)}
            />
            <br />
            <label>Срок рассрочки: {month}</label>
            <input
              type="range"
              min={2}
              max={12}
              defaultValue={2}
              onChange={(e) => setMonth(e.target.value)}
            />
          </form>
          <div className={css.calculatorResult}>
            <div>
              Общая стоимость
              <p>{result}</p>
            </div>
            <p>Ежемесячный платеж</p>
            <p>{monthPayment}</p>
            <p>Первый платеж</p>
            <p>{firstPayment}</p>
            <p>Торговая наценка</p>
            <p>{murkUp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
