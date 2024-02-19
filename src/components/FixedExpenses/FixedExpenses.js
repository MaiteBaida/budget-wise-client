import Table from "../Table/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import "./FixedExpenses.scss";

function FixedExpenses() {
  const [expensesList, setExpensesList] = useState([]);
  //change userid to ${id when working}
  const getExpensesList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/:userid/expenses`
      );
      setExpensesList(response.data);
    } catch (error) {
      console.error("Error fetching expenses data:", error);
    }
  };

  useEffect(() => {
    getExpensesList();
  }, []);

  return (
    <>
      <Table list={getExpensesList()} />
    </>
  );
}

export default FixedExpenses;
