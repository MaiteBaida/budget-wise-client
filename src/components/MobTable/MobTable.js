import "./MobTable.scss";
import edit from "../../assets/icons/edit.svg";
import add from "../../assets/icons/add.svg";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function MobTable({ list, title, expenseid, entriesValues, type }) {
  const nav = useNavigate();

  const handleSubmit = async () => {
    nav(`/expenses/${expenseid}/entries/add`);
  };

  const handleAddItem = async () => {
    nav(`/expenses/add?type=${type}`);
  };

  return (
    <section className="expenses">
      <h2 className="expenses__title">{title} Expenses</h2>
      <p className="expenses__amount">${entriesValues} CAD</p>
      {list.map(({ name, budget, value, id }) => (
        <div className="expenses__container" key={id}>
          <div className="expenses__info">
            <p className="expenses__header">EXPENSE</p>
            <Link to={`/expenses/${id}`}>
              <p className="expenses__text">{name}</p>
            </Link>
          </div>
          <div className="expenses__info">
            <p className="expenses__header">BUDGET</p>
            <Link to={`/expenses/${id}`}>
              <p className="expenses__text">${budget} CAD</p>
            </Link>
          </div>
          <div className="expenses__info">
            <p className="expenses__header">TOTAL ENTRIES</p>
            <p className="expenses__text">{value}</p>
          </div>
          <div className="expenses__buttons">
            <div className="expenses__button-container">
              <button onClick={handleSubmit}>
                <img src={add} alt="Add entry" />
              </button>
            </div>
            <Link to={`/expenses/${id}/edit`}>
              <img
                className="expenses__edit-icon"
                src={edit}
                alt="Edit expense"
              />
            </Link>
          </div>
        </div>
      ))}
      <div className="expenses__add-item">
        <Button
          style="primary"
          type="button"
          label="Add expense"
          onClick={handleAddItem}
        />
      </div>
    </section>
  );
}

export default MobTable;
