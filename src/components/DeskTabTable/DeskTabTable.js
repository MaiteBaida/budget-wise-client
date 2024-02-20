import "./DeskTabTable.scss";
import { Link, useNavigate } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import Button from "../Button/Button";

function DeskTabTable({ list, title, expenseid, total }) {
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    nav(`/expenses/${expenseid}/newentry`);
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
          <div className="table__header">SPENT</div>
        </div>
        {list.map(({ name, budget, value, id }) => (
          <div className="table__row">
            <div className="table__cell">{name}</div>
            <div className="table__cell">${budget} CAD</div>
            <div className="table__cell">${value} CAD</div>
            <div className="table__cell table__cell--buttons">
              <div className="expenses__button-container">
                <Button
                  style="primary"
                  type="button"
                  label="Add entry"
                  onSubmit={handleSubmit}
                />
              </div>
              <Link to={`/expense/${id}/edit`}>
                <img className="table__edit-icon" src={edit} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeskTabTable;
