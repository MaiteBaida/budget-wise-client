import "./MobTable.scss";
import edit from "../../assets/icons/edit.svg";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function MobTable({ list, title, expenseid, total }) {
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    nav(`/expenses/${expenseid}/newentry`);
  };

  return (
    <section className="expenses">
      <h2 className="expenses__title">{title} Expenses</h2>
      <p className="expenses__amount">${total} CAD</p>
      {list.map(({ name, budget, value, id }) => (
        <div className="expenses__container">
          <div className="expenses__info">
            <p className="expenses__header">EXPENSE</p>
            <p className="expenses__text">{name}</p>
          </div>
          <div className="expenses__info">
            <p className="expenses__header">BUDGET</p>
            <p className="expenses__text">$ {budget} CAD</p>
          </div>
          <div className="expenses__info">
            <p className="expenses__header">SPENT</p>
            <p className="expenses__text">{value}</p>
          </div>
          <div className="expenses__buttons">
            <div className="expenses__button-container">
              <Button
                style="primary"
                type="button"
                label="Add entry"
                onSubmit={handleSubmit}
              />
            </div>
            <Link to={`/expense/${id}/edit`}>
              <img className="expenses__edit-icon" src={edit} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MobTable;
