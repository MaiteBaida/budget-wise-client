import "./MobTable.scss";
import Button from "../Button/Button";
import edit from "../../assets/icons/edit.svg";
import add from "../../assets/icons/add.svg";
import arrowdown from "../../assets/icons/chevron-down.svg";
import arrowup from "../../assets/icons/chevron-up.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MobTable({ list, title, total, entriesValues, type }) {
  const nav = useNavigate();

  const [expandedIds, setExpandedIds] = useState([]);

  const handleAddItem = async () => {
    nav(`/expenses/add?type=${type}`);
  };

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
    <section className="expenses">
      <div className="expenses__wrapper">
        <h2 className="expenses__title">{title} Expenses</h2>
        <p className="expenses__amount">${total} CAD</p>
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
      {expandedIds.includes("expand") &&
        list.map(({ name, budget, total_entries, id }) => (
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
              <p className="expenses__text">{total_entries}</p>
            </div>
            <div className="expenses__buttons">
              <div className="expenses__button-container">
                <Link to={`/expenses/${id}/entries/add`}>
                  <img
                    src={add}
                    className="expenses__add-icon"
                    alt="Add entry"
                  />
                </Link>
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
      {expandedIds.includes("expand") && (
        <div className="expenses__add-item">
          <Button
            style="primary"
            type="button"
            label="Add expense"
            onClick={handleAddItem}
          />
        </div>
      )}
    </section>
  );
}

export default MobTable;
