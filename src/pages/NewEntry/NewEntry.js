import "./NewEntry.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import arrowleft from "../../assets/icons/arrow-left.svg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function NewEntry() {
  const nav = useNavigate();

  const { id } = useParams();

  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [expenseName, setExpenseName] = useState("");

  const fetchExpenseName = async () => {
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

      setExpenseName(response.data.name);
      console.log(response.data.name);
    } catch (error) {
      console.error("Error fetching expense name:", error);
    }
  };

  useEffect(() => {
    fetchExpenseName();
  }, [id]);

  const onCancel = () => {
    nav(`/expenses/${id}`);
  };

  return (
    <main className="new-entry">
      <div className="new-entry__header">
        <button type="button" onClick={() => nav(`/expenses/${id}`)}>
          <img className="new-entry__arrowleft" src={arrowleft} alt="return" />
        </button>
        <h2 className="new-entry__title">Add New Entry to {expenseName}</h2>
      </div>
      <form>
        <div className="new-entry__info-container">
          <div className="new-entry__info">
            <label className="new-entry__label">ENTRY VALUE</label>
            <Input
              placeholder="Entry Value"
              customClass="new-entry__input"
              required
            />
          </div>
          <div className="new-entry__info">
            <label className="new-entry__label">Notes:</label>
            <textarea
              placeholder="Add notes"
              className="new-entry__txtarea"
              required
            />
          </div>
        </div>
        <div className="new-entry__button-container">
          <div className="new-entry__buttons">
            <Button
              onClick={onCancel}
              customClass="new-entry__button"
              type="button"
              style="secondary"
              label="Cancel"
            />
            <Button type="submit" style="primary" label="Save" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default NewEntry;
