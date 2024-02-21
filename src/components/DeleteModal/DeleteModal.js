import "./DeleteModal.scss";
import close from "../../assets/icons/close.svg";
import Button from "../Button/Button";
import axios from "axios";

const DeleteModal = ({ onClose, item, deleteItem }) => {
  return (
    <div className="delete__overlay">
      <div className="delete">
        <a className="delete__close" onClick={onClose}>
          <img className="delete__close-icon" src={close} />
        </a>
        <h1 className="delete__title">Delete {item.item_name}?</h1>
        <p className="delete__txt">
          Please confirm that you'd like to delete {item.item_name}. You won't
          be able to undo this action.
        </p>
        <div className="delete--filler"></div>
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
