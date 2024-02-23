import "./ExpensesTables.scss";
import DeskTabTable from "../DeskTabTable/DeskTabTable";
import MobTable from "../MobTable/MobTable";
import axios from "axios";
import { useState, useEffect } from "react";

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

  function totalEntries(expenses) {
    expenses.forEach((expense) => {
      let totalValue = 0;

      expense.entries.forEach((entry) => {
        totalValue += parseFloat(entry.value);
      });

      expense.totalEntryValue = totalValue.toFixed(2);
    });
  }

  return (
    <main>
      {isTableVisible ? (
        <>
          <DeskTabTable
            list={fixedExpenses}
            title="Fixed"
            type="Fixed"
            total={totalEntries(fixedExpenses)}
          />
          <DeskTabTable
            list={essentialExpenses}
            title="Essential"
            type="Essential"
            total={totalEntries(essentialExpenses)}
          />
          <DeskTabTable
            list={nonEssentialExpenses}
            title="Non-Essential"
            type="Non-Essential"
            total={totalEntries(nonEssentialExpenses)}
          />
        </>
      ) : (
        <>
          <MobTable
            list={fixedExpenses}
            title="Fixed"
            total={totalEntries(fixedExpenses)}
            type="Fixed"
          />
          <MobTable
            list={essentialExpenses}
            title="Essential"
            total={totalEntries(essentialExpenses)}
            type="Essential"
          />
          <MobTable
            list={nonEssentialExpenses}
            title="Non-Essential"
            total={totalEntries(nonEssentialExpenses)}
            type="Non-Essential"
          />
        </>
      )}
    </main>
  );
}

export default ExpensesTables;
