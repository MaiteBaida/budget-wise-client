import "./EditExpense.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import arrowleft from "../../assets/icons/arrow-left.svg";
import trashcan from "../../assets/icons/trash-can.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const typeOptions = [
  { value: "Fixed", label: "Fixed Expense" },
  { value: "Essential", label: "Essential Expense" },
  { value: "Non-Essential", label: "Non-Essential Expense" },
];

const frequencyOptions = [
  { value: "Monthly", label: "Monthly" },
  { value: "Weekly", label: "Weekly" },
  { value: "Yearly", label: "Yearly" },
];

function EditExpense() {
  const nav = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState(null);
  const [budget, setBudget] = useState(null);
  const [type, setType] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchExpense = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };
      const response = await axios.get(
        `http://localhost:8000/expenses/${id}`,
        config
      );

      setName(response.data.name);
      setBudget(response.data.budget);
      setType(response.data.type);
      setFrequency(response.data.frequency);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

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

  const saveExpense = async (event) => {
    event.preventDefault();

    if (!name || !budget || !type) {
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const expenseData = {
        name: name,
        budget: budget,
        type: type,
        frequency: frequency,
      };

      await axios.put(
        `http://localhost:8000/expenses/${id}`,
        expenseData,
        config
      );
      alert("Your expense has been edited");
      nav("/home");
    } catch (error) {
      console.error("Failed to edit expense:", error);
      alert("Failed to edit expense");
    }
  };

  useEffect(() => {
    fetchExpense();
  }, [id]);

  const deleteExpense = async (e) => {
    try {
      const authToken = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      await axios.delete(`http://localhost:8000/expenses/${id}`, config);
      closeModal();
      alert("Your expense and entries have been deleted");
      nav("/home");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="expenses-edit">
      <div className="expenses-edit__card">
        <div className="expenses-edit__header">
          <Link to="/home">
            <img className="expenses-edit__arrowleft" src={arrowleft} />
          </Link>
          <h2 className="expenses-edit__title">Edit {name}</h2>
        </div>
        <form onSubmit={saveExpense} className="expenses-edit__form">
          <div className="expenses-edit__info-container">
            <div className="expenses-edit__info">
              <label className="expenses-edit__label">EXPENSE NAME</label>
              <Input
                placeholder="Name your expense"
                value={name}
                customClass="expenses-edit__input"
                onChange={handleName}
                required
              />
            </div>
            <div className="expenses-edit__info">
              <label className="expenses-edit__label">BUDGET</label>
              <Input
                placeholder="Define a budget"
                value={budget}
                customClass="expenses-edit__input"
                onChange={handleBudget}
                required
              />
            </div>
            <div className="expenses-edit__info">
              <label className="expenses-edit__label">EXPENSE TYPE</label>
              <Select
                placeholder="Select an expense type"
                value={type}
                options={typeOptions}
                customClass="expenses-edit__input"
                onChange={handleType}
                required
              />
            </div>
            {type === "Fixed" && (
              <div className="expenses-edit__info">
                <label className="expenses-edit__label">FREQUENCY</label>
                <Select
                  placeholder="Select a frequency"
                  value={frequency}
                  options={frequencyOptions}
                  customClass="expenses-edit__input"
                  onChange={handleFrequency}
                  required
                />
              </div>
            )}
          </div>
          <div className="expenses-edit__button-container">
            <div className="expenses-edit__buttons">
              <Button
                onClick={() => nav("/home")}
                customClass="expenses-edit__button"
                type="button"
                style="secondary"
                label="Cancel"
              />
              <Button type="submit" style="primary" label="Save" />
            </div>
            <button type="button" onClick={openModal}>
              <img className="expenses-edit__delete" src={trashcan} />
            </button>
          </div>
        </form>
        {modalOpen && (
          <DeleteModal
            onClose={closeModal}
            item={name}
            deleteItem={deleteExpense}
          />
        )}
      </div>
    </main>
  );
}

export default EditExpense;
