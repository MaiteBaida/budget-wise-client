import "./DeskTabTable.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";

function DeskTabTable({ list, title }) {
  return (
    <section className="table">
      <h2 className="table__title">{title} Expenses</h2>
      <div className="table__container">
        <div className="table__row">
          <div className="table__header">EXPENSE</div>
          <div className="table__header">BUDGET</div>
          <div className="table__header">SPENT</div>
        </div>
        {list.map(({ name, budget, value, id }) => (
          <div className="table__row">
            <div className="table__cell">{name}</div>
            <div className="table__cell">${budget} CAD</div>
            <div className="table__cell">${value} CAD</div>
            <div className="table__cell">
              <Link to={`/expense/${id}/edit`} className="table__link">
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
