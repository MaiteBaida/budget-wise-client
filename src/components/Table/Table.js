import "./Table.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";

function Table({ list }) {
  return (
    <section className="table">
      <h2 className="table__title">Fixed Expenses</h2>
      <div className="table__container">
        <div className="table__row">
          <div className="table__header table__header--expense">EXPENSE</div>
          <div className="table__header table__header--budget">BUDGET</div>
          <div className="table__header table__header--spent">SPENT</div>
        </div>

        {/* {list.map(({ name, budget, spent, id }) => ( */}
        <div className="table__row">
          <div className="table__cell table__cell--expense">Mortgage</div>
          <div className="table__cell table__cell--budget">$ 2800.00 CAD</div>
          <div className="table__cell table__cell--spent">$ 2800.00 CAD</div>
          <div className="table__cell">
            <Link to="/expense/${id}/edit">
              <img className="table__edit-icon" src={edit} />
            </Link>
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
}

export default Table;
