import Table from "../Table/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import "./FixedExpenses.scss";

function FixedExpenses() {
  const [expensesList, setExpensesList] = useState([]);

  const getExpensesList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/expenses");
      setExpensesList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching expenses data:", error);
    }
  };

  useEffect(() => {
    getExpensesList();
  }, []);

  return (
    <>
      <Table list={expensesList} />
    </>
  );
}

export default FixedExpenses;
