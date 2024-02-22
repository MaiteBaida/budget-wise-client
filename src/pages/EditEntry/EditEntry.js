import "./EditEntry.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import arrowleft from "../../assets/icons/arrow-left.svg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditEntry() {
  const nav = useNavigate();

  const { id } = useParams();

  const [value, setValue] = useState(null);
  const [notes, setNotes] = useState(null);
  // hhhhhhhhhhhhhhhhhhhhhhhhhh
  const fetchExpense = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };
      const response = await axios.get(
        `http://localhost:8000/expenses/${id}/entries/${entryId}`,
        config
      );

      setValue(response.data.value);
      setNotes(response.data.notes);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleNotes = (event) => {
    setNotes(event.target.value);
  };

  const editExpense = async (event) => {
    event.preventDefault();

    if (!value) {
      return;
    }

    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const entryData = {
        value: value,
        notes: notes,
      };

      await axios.put(
        `http://localhost:8000/expenses/${id}/entries/${entryId}`,
        entryData,
        config
      );
      alert("Your entry has been edited");
      nav(`/expenses/${id}`);
    } catch (error) {
      console.error("Failed to edit entry:", error);
      alert("Failed to edit entry");
    }
  };

  const onCancel = () => {
    nav(`/expenses/${id}`);
  };

  useEffect(() => {
    fetchExpense();
  }, [id]);

  return (
    <main className="entry-edit">
      <div className="entry-edit__header">
        <button type="button" onClick={() => nav(`/expenses/${id}`)}>
          <img className="entry-edit__arrowleft" src={arrowleft} />
        </button>
        <h2 className="entry-edit__title">Edit {fetchExpenseName} entry</h2>
      </div>
      <form onSubmit={editExpense} className="entry-edit__form">
        <div className="entry-edit__info-container">
          <div className="entry-edit__info">
            <label className="entry-edit__label">ENTRY VALUE</label>
            <Input
              placeholder="Entry Value"
              value={value}
              customClass="entry-edit__input"
              onChange={handleValue}
              required
            />
          </div>
          <div className="entry-edit__info">
            <label className="entry-edit__label">Notes:</label>
            <textarea
              placeholder="Add notes"
              value={notes}
              customClass="entry-edit__input"
              onChange={handleNotes}
              required
            />
          </div>
        </div>
        <div className="entry-edit__button-container">
          <div className="entry-edit__buttons">
            <Button
              onClick={onCancel}
              customClass="entry-edit__button"
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

export default EditEntry;
