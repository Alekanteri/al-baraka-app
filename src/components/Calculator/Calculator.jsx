import React, { useEffect, useState } from "react";
import css from "./Calculator.module.scss";
import "../../styles/global.scss";

const Calculator = () => {
  const [count, setCount] = useState(50000);
  const [month, setMonth] = useState(3);
  const [firstPayment, setFistPayment] = useState(0);
  const [monthPayment, setMonthPayment] = useState(0);
  const [markUp, setMarkUp] = useState(0);
  const [result, setResult] = useState(0);
  const [discount, setDiscount] = useState(0.02);
  const [countInput, setCountInput] = useState(count);
  const [monthInput, setMonthInput] = useState(month);

  const handleChangeCount = (event) => {
    document.getElementById("inputCountId").value = event.target.value;
    setCountInput(event.target.value);
    setCount(event.target.value);
    calculateAll(event.target.value, month, discount);
  };

  const handleChangeMonth = (event) => {
    document.getElementById("inputMonthId").value = event.target.value;
    setMonthInput(event.target.value);
    setMonth(event.target.value);
    calculateAll(count, event.target.value, discount);
  };

  const handleInputCount = (event) => {
    if (event.key === "Enter") {
      if (event.target.value > 200000) {
        event.target.value = 200000;
        setCount(200000);
      } else if (event.target.value < 8000) {
        event.target.value = 8000;
        setCount(8000);
      }
      setCountInput(event.target.value);
      setCount(event.target.value);
      calculateAll(event.target.value, month, discount);
    }
  };

  const handleInputMonth = (event) => {
    if (event.key === "Enter") {
      if (event.target.value > 12) {
        event.target.value = 12;
        setMonth(12);
      } else if (event.target.value < 2) {
        event.target.value = 2;
        setMonth(2);
      }
      setMonthInput(event.target.value);
      setMonth(event.target.value);
      calculateAll(count, event.target.value, discount);
    }
  };

  const calculateAll = (newCount, newMonth, newDiscount) => {
    let first = Math.round(newCount * 0.3);
    first = first / 100;
    first = Math.ceil(first);
    first = first * 100;
    let markUpPayment = Math.round(
      newDiscount * Number(newMonth) * Number(newCount)
    );
    let totalPayment = Math.round(Number(newCount) + markUpPayment);
    totalPayment = totalPayment / 100;
    totalPayment = Math.ceil(totalPayment);
    totalPayment = totalPayment * 100;
    let sumLeft = totalPayment - first;
    let paymentPerMonth = Math.round(sumLeft / Number(newMonth));

    paymentPerMonth = paymentPerMonth / 100;
    paymentPerMonth = Math.ceil(paymentPerMonth);
    paymentPerMonth = paymentPerMonth * 100;
    totalPayment = paymentPerMonth * Number(newMonth) + first;
    markUpPayment = totalPayment - Number(newCount);

    setFistPayment(first);
    setMarkUp(markUpPayment);
    setResult(totalPayment);
    setMonthPayment(paymentPerMonth);
  };

  useEffect(() => {
    calculateAll(count, month, discount);
  }, []);

  return (
    <>
      <div className={css.calculationContainer}>
        <h1 className={css.title}>Рассчитайте свою персональную рассрочку</h1>
        <div className={css.calculatorBody}>
          <div className={css.formContainer}>
            <div className={css.discountBody}>
              <div
                className={`${css.discountBtn} ${
                  discount == 0.02 ? css.activeBtn : ""
                }`}
                onClick={() => {
                  setDiscount(0.02);
                  calculateAll(count, month, 0.02);
                }}
              >
                Идеал
              </div>
              <div
                className={`${css.discountBtn} ${
                  discount == 0.03 ? css.activeBtn : ""
                }`}
                onClick={() => {
                  setDiscount(0.03);
                  calculateAll(count, month, 0.03);
                }}
              >
                Стандарт
              </div>
            </div>
            <label>Стоимость товара:</label>
            <input
              type="number"
              id="inputCountId"
              min={8000}
              max={200000}
              defaultValue={countInput}
              onKeyDown={handleInputCount}
            />
            <input
              type="range"
              min={8000}
              max={200000}
              step={100}
              value={count}
              onChange={handleChangeCount}
            />
            <br />
            <label>Срок рассрочки:</label>
            <input
              type="number"
              id="inputMonthId"
              min={2}
              max={12}
              defaultValue={monthInput}
              onKeyDown={handleInputMonth}
            />
            <input
              type="range"
              min={2}
              max={12}
              step={1}
              value={month}
              onChange={handleChangeMonth}
            />
          </div>
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
            <p>{markUp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
