import "./DeskTabTable.scss";
import Button from "../Button/Button";
import edit from "../../assets/icons/edit.svg";
import arrowdown from "../../assets/icons/chevron-down.svg";
import arrowup from "../../assets/icons/chevron-up.svg";
import add from "../../assets/icons/add.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DeskTabTable({ list, title, total, type }) {
  const nav = useNavigate();

  const [expandedIds, setExpandedIds] = useState([]);

  const handleAddItem = () => {
    nav(`/expenses/add?type=${type}`);
  };

  //function to expand table and see all expenses
  const toggleExpand = (id) => {
    setExpandedIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <section className="table">
      <div className="table__title-container">
        <h2 className="table__title">{title} Expenses</h2>
        <div className="table__title-right">
          <span className="table__amount">${total} CAD</span>
          <button
            className="expand__icon-box"
            onClick={() => toggleExpand("expand")}
          >
            {expandedIds.includes("expand") ? (
              <img
                src={arrowup}
                alt="Arrow Up"
                className="expenses__arrow-icon"
              />
            ) : (
              <img
                src={arrowdown}
                alt="Arrow Down"
                className="expenses__arrow-icon"
              />
            )}
          </button>
        </div>
      </div>
      <div className="table__container">
        {expandedIds.includes("expand") && (
          <div className="table__row table__row--header">
            <div className="table__header">EXPENSE</div>
            <div className="table__header">BUDGET</div>
            <div className="table__header">TOTAL ENTRIES</div>
          </div>
        )}
        {expandedIds.includes("expand") &&
          list.map(({ name, budget, id, total_entries }) => (
            <div className="table__row" key={id}>
              <Link to={`/expenses/${id}`}>
                <div className="table__cell">
                  <p>{name}</p>
                </div>
              </Link>
              <Link to={`/expenses/${id}`}>
                <div className="table__cell">
                  <p>${budget} CAD</p>
                </div>
              </Link>
              <div className="table__cell">
                <p
                  className={`table__entries ${
                    budget >= total_entries
                      ? "table__entries--below"
                      : "table__entries--over"
                  }`}
                >
                  ${total_entries} CAD
                </p>
              </div>
              <div className="table__cell table__cell--buttons">
                <div className="expenses__button-container">
                  <Link to={`/expenses/${id}/entries/add`}>
                    <img
                      className="table__add-icon"
                      src={add}
                      alt="Add entry"
                    />
                  </Link>
                </div>
                <Link to={`/expenses/${id}/edit`}>
                  <img
                    className="table__edit-icon"
                    src={edit}
                    alt="Edit expense"
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
      {expandedIds.includes("expand") && (
        <div className="table__add-item-container">
          <div className="table__add-item">
            <Button
              style="primary"
              type="button"
              label="Add Expense"
              onClick={handleAddItem}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default DeskTabTable;
