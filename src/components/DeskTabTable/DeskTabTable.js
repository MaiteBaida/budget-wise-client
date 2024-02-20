import "./DeskTabTable.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";

function DeskTabTable({ list, title }) {
  return (
    <section className="table">
      <h2 className="table__title">{title} Expenses</h2>
      <div className="table__container">
        <div className="table__row">
          <div className="table__header table__header--expense">EXPENSE</div>
          <div className="table__header table__header--budget">BUDGET</div>
          <div className="table__header table__header--spent">SPENT</div>
        </div>
        {list.map(({ name, budget, value, id }) => (
          <div className="table__row">
            <div className="table__cell table__cell--expense">{name}</div>
            <div className="table__cell table__cell--budget">${budget} CAD</div>
            <div className="table__cell table__cell--spent">${value} CAD</div>
            <div className="table__cell">
              <Link to="/expense/${id}/edit" className="table__link">
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
