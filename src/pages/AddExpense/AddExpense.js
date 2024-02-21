import "./AddExpense.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddExpense() {
  const nav = useNavigate();

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

  const [name, setName] = useState(null);
  const [budget, setBudget] = useState(null);
  const [type, setType] = useState(null);
  const [frequency, setFrequency] = useState(null);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      budget,
      type,
      frequency,
    };

    const isFormValid = () => {
      return name && budget && type;
    };

    if (isFormValid()) {
      try {
        const response = await axios.post(
          `http://localhost:8000/expenses`,
          payload
        );

        setName("");
        setBudget("");
        setType("");
        setFrequency("");

        console.log("success:", response.data);
        nav("/home");
      } catch (error) {
        console.error("Failed to add expense:", error);
        alert("Failed to add expense");
      }
    }
  };

  return (
    <main className="expenses-add">
      <h2 className="expenses-add__title">Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expenses-add__form">
        <div className="expenses-add__info-container">
          <div className="expenses-add__info">
            <label className="expenses-add__label">EXPENSE NAME</label>
            <Input
              placeholder="Type an expense name"
              customClass="expenses-add__input"
              onChange={handleName}
              required
            />
          </div>
          <div className="expenses-add__info">
            <label className="expenses-add__label">BUDGET</label>
            <Input
              placeholder="Define a budget"
              customClass="expenses-add__input"
              onChange={handleBudget}
              required
            />
          </div>
          <div className="expenses-add__info">
            <label className="expenses-add__label">EXPENSE TYPE</label>
            <Select
              placeholder="Select an expense type"
              options={typeOptions}
              customClass="expenses-add__input"
              onChange={handleType}
              required
            />
          </div>
          {type === "Fixed Expense" && (
            <div className="expenses-add__info">
              <label className="expenses-add__label">FREQUENCY</label>
              <Select
                label="Select a frequency"
                options={frequencyOptions}
                customClass="expenses-add__input"
                onChange={handleFrequency}
                required
              />
            </div>
          )}
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
