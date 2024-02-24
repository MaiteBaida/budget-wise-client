import "./HomePage.scss";
import UserOverview from "../../components/UserOverview/UserOverview";
import DeskTabTable from "../../components/DeskTabTable/DeskTabTable";
import MobTable from "../../components/MobTable/MobTable";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
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

  const totalEntriesByExpenseType = (expenses) => {
    let total = 0;

    expenses.forEach((expense) => {
      total = total + Number(expense.total_entries);
    });

    return total;
  };

  return (
    <>
      <UserOverview />
      <main>
        {isTableVisible ? (
          <>
            <DeskTabTable
              list={fixedExpenses}
              title="Fixed"
              type="Fixed"
              total={totalEntriesByExpenseType(fixedExpenses)}
            />
            <DeskTabTable
              list={essentialExpenses}
              title="Essential"
              type="Essential"
              total={totalEntriesByExpenseType(essentialExpenses)}
            />
            <DeskTabTable
              list={nonEssentialExpenses}
              title="Non-Essential"
              type="Non-Essential"
              total={totalEntriesByExpenseType(nonEssentialExpenses)}
            />
          </>
        ) : (
          <>
            <MobTable
              list={fixedExpenses}
              title="Fixed"
              total={totalEntriesByExpenseType(fixedExpenses)}
              type="Fixed"
            />
            <MobTable
              list={essentialExpenses}
              title="Essential"
              total={totalEntriesByExpenseType(essentialExpenses)}
              type="Essential"
            />
            <MobTable
              list={nonEssentialExpenses}
              title="Non-Essential"
              total={totalEntriesByExpenseType(nonEssentialExpenses)}
              type="Non-Essential"
            />
          </>
        )}
      </main>
    </>
  );
}

export default HomePage;
