import "./ExpenseOverview.scss";
import arrowleft from "../../assets/icons/arrow-left.svg";
import edit from "../../assets/icons/edit.svg";
import trashcan from "../../assets/icons/trash-can.svg";
import Button from "../../components/Button/Button";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ExpenseOverview() {
  const nav = useNavigate();
  const { id } = useParams();

  const [expenseName, setExpenseName] = useState("");
  const [entriesList, setEntriesList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getExpenseDetails = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(`http://localhost:8000/expenses/${id}`, {
        headers: { Authorization: authToken },
      });
      setExpenseName(response.data.name);
    } catch (error) {
      console.error("Error fetching expense details:", error);
    }
  };

  const getEntriesList = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:8000/expenses/${id}/entries`,
        {
          headers: { Authorization: authToken },
        }
      );
      setEntriesList(response.data);
    } catch (error) {
      console.error("Error fetching entries data:", error);
    }
  };

  useEffect(() => {
    getExpenseDetails();
    getEntriesList();
  }, [id]);

  const deleteEntry = async (e) => {
    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      await axios.delete(
        `http://localhost:8000/expenses/${id}/entries/${itemToDelete.id}`,
        config
      );
      closeModal();
      alert("Your entry has been deleted");
      getEntriesList();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const openModal = (item) => {
    setItemToDelete(item);
  };

  const closeModal = () => {
    setItemToDelete(null);
  };

  const totalValue = entriesList
    .reduce((total, entry) => total + parseFloat(entry.value), 0)
    .toFixed(2);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <main className="expense">
      <div className="expense__header">
        <div className="expense__header-container">
          <button type="button" onClick={() => nav("/home")}>
            <img
              className="expense__icon-arrowleft"
              src={arrowleft}
              alt="return icon"
            />
          </button>
          <h1 className="expense__title">{expenseName}</h1>
        </div>
        <span className="expense__subtitle">$ {totalValue} CAD</span>
      </div>
      <ul className="expense__list">
        {entriesList.map((entry) => (
          <li className="expense__entry" key={entry.id}>
            <div className="expense__info">
              <div className="expense__container">
                <p className="expense__entry-info">
                  {formatDate(entry.timestamp)}
                </p>
                <p className="expense__entry-info">$ {entry.value} CAD</p>
              </div>
              {entry.notes.trim() !== "" && (
                <>
                  <p className="expense__label">Notes:</p>
                  <p className="expense__entry-info">{entry.notes}</p>
                </>
              )}
            </div>
            <div className="expense__icon-container">
              <button
                onClick={() => nav(`/expenses/${id}/entries/${entry.id}/edit`)}
              >
                <img className="expense__icon" src={edit} alt="edit icon" />
              </button>
              <button
                type="button"
                onClick={() => {
                  openModal(entry);
                }}
              >
                <img
                  className="expense__icon"
                  src={trashcan}
                  alt="delete icon"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {itemToDelete && (
        <DeleteModal
          onClose={closeModal}
          item={`$${itemToDelete.value} CAD`}
          deleteItem={deleteEntry}
        />
      )}
      <div className="expense__add-button">
        <Button
          customClass="expense__add-entry"
          style="primary"
          type="button"
          label="Add New Entry"
          onClick={() => {
            nav(`/expenses/${id}/entries/add`);
          }}
        />
      </div>
    </main>
  );
}

export default ExpenseOverview;
