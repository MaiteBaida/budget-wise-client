import "./ExpenseOverview.scss";
import arrowleft from "../../assets/icons/arrow-left.svg";
import edit from "../../assets/icons/edit.svg";
import trashcan from "../../assets/icons/trash-can.svg";
import { useNavigate } from "react-router-dom";

function ExpenseOverview() {
  const nav = useNavigate();

  return (
    <main className="expense">
      <div>
        <button type="button" onClick={() => nav("/home")}>
          <img src={arrowleft} />
        </button>
        <h1>Expense (change) Overview</h1>
        <span>$ CAD</span>
      </div>
      <ul>
        {/* {entries.map(()=>)} */}
        <li>
          <p>timstamp</p>
          <p>$ CAD</p>
          <p>notes</p>
          <button>
            <img src={edit} />
          </button>
          <button>
            <img src={trashcan} />
          </button>
        </li>
      </ul>
    </main>
  );
}

export default ExpenseOverview;
