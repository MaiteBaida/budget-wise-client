import "./ExpensesTables.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import DeskTabTable from "../DeskTabTable/DeskTabTable";
import MobTable from "../MobTable/MobTable";

function ExpensesTables() {
  const [expensesList, setExpensesList] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

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

  useEffect(() => {
    getExpensesList();
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
          <DeskTabTable list={fixedExpenses} title="Fixed" />
          <DeskTabTable list={essentialExpenses} title="Essential" />
          <DeskTabTable list={nonEssentialExpenses} title="Non-Essential" />
        </>
      ) : (
        <>
          <MobTable list={fixedExpenses} title="Fixed" />
          <MobTable list={essentialExpenses} title="Essential" />
          <MobTable list={nonEssentialExpenses} title="Non-Essential" />
        </>
      )}
    </main>
  );
}

export default ExpensesTables;
