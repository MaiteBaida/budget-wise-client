import "./ExpensesTables.scss";
import DeskTabTable from "../DeskTabTable/DeskTabTable";
import MobTable from "../MobTable/MobTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ExpensesTables() {
  const { id } = useParams();

  const [expensesList, setExpensesList] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [entriesValues, setEntriesValues] = useState([]);

  const getExpensesList = async () => {
    try {
      const authToken = await localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:8000/expenses", {
        headers: { Authorization: authToken },
      });
      setExpensesList(response.data);
    } catch (error) {
      console.error("Error fetching expenses data:", error);
    }
  };

  const getEntriesValues = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:8000/expenses/${id}/entries`,
        {
          headers: { Authorization: authToken },
        }
      );
      const values = response.data.map((entry) => entry.value);
      const totalValue = values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      console.log(response.data);
      setEntriesValues(totalValue);
    } catch (error) {
      console.error("Error fetching entries data:", error);
    }
  };

  useEffect(() => {
    getExpensesList();
    getEntriesValues();
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const handleScreenResize = () => {
    if (window.innerWidth >= 780) {
      setIsTableVisible(true);
    } else {
      setIsTableVisible(false);
    }
  };

  const fixedExpenses = expensesList.filter(
    (expense) => expense.type === "Fixed"
  );

  const essentialExpenses = expensesList.filter(
    (expense) => expense.type === "Essential"
  );

  const nonEssentialExpenses = expensesList.filter(
    (expense) => expense.type === "Non-Essential"
  );

  return (
    <main>
      {isTableVisible ? (
        <>
          <DeskTabTable list={fixedExpenses} title="Fixed" type="Fixed" />
          <DeskTabTable
            list={essentialExpenses}
            title="Essential"
            type="Essential"
          />
          <DeskTabTable
            list={nonEssentialExpenses}
            title="Non-Essential"
            type="Non-Essential"
          />
        </>
      ) : (
        <>
          <MobTable
            list={fixedExpenses}
            title="Fixed"
            total={entriesValues}
            type="Fixed"
          />
          <MobTable
            list={essentialExpenses}
            title="Essential"
            total={entriesValues}
            type="Essential"
          />
          <MobTable
            list={nonEssentialExpenses}
            title="Non-Essential"
            total={entriesValues}
            type="Non-Essential"
          />
        </>
      )}
    </main>
  );
}

export default ExpensesTables;
