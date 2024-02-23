import "./DeskTabTable.scss";
import { Link, useNavigate } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import Button from "../Button/Button";
import add from "../../assets/icons/add.svg";

function DeskTabTable({ list, title, total, type }) {
  const nav = useNavigate();

  const handleAddItem = () => {
    nav(`/expenses/add?type=${type}`);
  };

  return (
    <section className="table">
      <div className="table__title-container">
        <h2 className="table__title">{title} Expenses</h2>
        <span className="table__amount">${total} CAD</span>
      </div>
      <div className="table__container">
        <div className="table__row table__row--header">
          <div className="table__header">EXPENSE</div>
          <div className="table__header">BUDGET</div>
          <div className="table__header">TOTAL ENTRIES</div>
        </div>
        {list.map(({ name, budget, value, id }) => (
          <div className="table__row">
            <div className="table__cell">
              <a href={`/expenses/${id}`}>{name}</a>
            </div>
            <div className="table__cell">
              <a href={`/expenses/${id}`}>${budget} CAD</a>
            </div>
            <div className="table__cell">${value} CAD</div>
            <div className="table__cell table__cell--buttons">
              <div className="expenses__button-container">
                <Link to={`/expenses/${id}/entries/add`}>
                  <img src={add} />
                </Link>
              </div>
              <Link to={`/expenses/${id}/edit`}>
                <img className="table__edit-icon" src={edit} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="table__add-item-container">
        <div className="table__add-item">
          <Button
            style="primary"
            type="button"
            label="Add expense"
            onClick={handleAddItem}
          />
        </div>
      </div>
    </section>
  );
}

export default DeskTabTable;
