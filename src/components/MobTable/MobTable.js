import "./MobTable.scss";
import edit from "../../assets/icons/edit.svg";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import add from "../../assets/icons/add.svg";

function MobTable({ list, title, expenseid, total }) {
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    nav(`/expenses/${expenseid}/newentry`);
  };

  const handleAddItem = async (event) => {
    nav("/expenses/add");
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
              <button onClick={handleSubmit}>
                <img src={add} />
              </button>
            </div>
            <Link to={`/expenses/${id}/edit`}>
              <img className="expenses__edit-icon" src={edit} />
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
