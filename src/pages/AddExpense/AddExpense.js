import "./AddExpense.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";

function AddExpense() {
  const typeOptions = [
    { value: "Fixed Expense", label: "Fixed Expense" },
    { value: "Essential Expense", label: "Essential Expense" },
    { value: "Non-Essential Expense", label: "Non-Essential Expense" },
  ];

  const frequencyOptions = [
    { value: "Monthly", label: "Monthly" },
    { value: "Weekly", label: "Weekly" },
    { value: "Yearly", label: "Yearly" },
  ];

  return (
    <main className="expenses-add">
      <h2 className="expenses-add__title">Add New Expense</h2>
      <form className="expenses-add__form">
        <div className="expenses-add__info-container">
          <div className="expenses-add__info">
            <label className="expenses-add__label">EXPENSE NAME</label>
            <Input customClass="expenses-add__input" />
          </div>
          <div className="expenses-add__info">
            <label className="expenses-add__label">BUDGET</label>
            <Input customClass="expenses-add__input" />
          </div>
          <div className="expenses-add__info">
            <label className="expenses-add__label">EXPENSE TYPE</label>
            <Select
              options={typeOptions}
              customClass="expenses-add__input"
              required
            />
          </div>
          <div className="expenses-add__info">
            <label className="expenses-add__label">FREQUENCY</label>
            <Select
              options={frequencyOptions}
              customClass="expenses-add__input"
              required
            />
          </div>
        </div>
        <div className="expenses-add__button-container">
          <div className="expenses-add__buttons">
            <Button
              customClass="expenses-add__button"
              type="button"
              style="secondary"
              label="Cancel"
            />
            <Button type="submit" style="primary" label="Add" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default AddExpense;
