import "./DeleteModal.scss";
import close from "../../assets/icons/close.svg";
import Button from "../Button/Button";

const DeleteModal = ({ onClose, item, deleteItem }) => {
  return (
    <div className="delete__overlay">
      <div className="delete">
        <button className="delete__close" onClick={onClose}>
          <img className="delete__close-icon" src={close} />
        </button>
        <h1 className="delete__title">Delete {item}?</h1>
        <p className="delete__txt">
          Please confirm that you'd like to delete {item}. You won't be able to
          undo this action.
        </p>
        <div className="delete__buttons">
          <div className="delete__button">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              type="button"
              label="Cancel"
              style="secondary"
            />
          </div>
          <div className="delete__button">
            <Button
              onClick={deleteItem}
              type="button"
              label="Delete"
              style="cancel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
