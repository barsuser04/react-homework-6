import React from "react";
import "./ExpenseCard.css";

const ExpensesCard = ({ el, onDelete }) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });
  const dateYear = new Date(el.date).getFullYear().toString();
  const dateDay = new Date(el.date).getDate().toString();

  return (
    <div className="itemDiv">
      <div className="left-side">
        <div className="p-date">
          <span>{dateMonth}</span>
          <span>{+dateYear}</span>
          <span className="num">{+dateDay}</span>
        </div>
        <p className="title">{el.title}</p>
      </div>
      <p className="price">{el.price} сом</p>
      <button onClick={() => onDelete(el.id)}>Удалить </button>
    </div>
  );
};

export default ExpensesCard;
