import "./MobTable.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import { Value } from "sass";

function MobTable({ list, title }) {
  return (
    <section className="expenses">
      <h2 className="expenses__title">{title} Expenses</h2>
      {list.map(({ name, budget, value, id }) => (
        <div className="expenses__container">
          <div className="expense__info">
            <p className="expenses__header">EXPENSE</p>
            <p className="expenses__text">{name}</p>
          </div>
          <div className="expense__info">
            <p className="expenses__header">BUDGET</p>
            <p className="expenses__text">{budget}</p>
          </div>
          <div className="expense__info">
            <p className="expenses__header">SPENT</p>
            <p className="expenses__text">{Value}</p>
          </div>
          <div className="expenses__info">
            <Link to={`/expense/${id}/edit`} className="expenses__link">
              <img className="expenses__edit-icon" src={edit} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MobTable;
