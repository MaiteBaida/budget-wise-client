import "./HomePage.scss";
import UserOverview from "../../components/UserOverview/UserOverview";
import DeskTabTable from "../../components/DeskTabTable/DeskTabTable";
import MobTable from "../../components/MobTable/MobTable";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [expensesList, setExpensesList] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [expenseId, setExpenseId] = useState("");

  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const authToken = await localStorage.getItem("authToken");

      const user = await axios.get("http://localhost:8000/users", {
        headers: { Authorization: authToken },
      });

      setUser(user);
    } catch (error) {
      alert("User not found");
      nav("/login");
    }
  };

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

  const fetchExpenseById = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      const config = {
        headers: {
          Authorization: authToken,
        },
      };

      const response = await axios.get(
        `http://localhost:8000/expenses/${id}`,
        config
      );
      console.log(id);
      console.log(response);

      setExpenseId(response.data.id);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenseById();
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, []);

  function totalEntries(expenses) {
    expenses.forEach((expense) => {
      let totalValue = 0;

      expense.entries.forEach((entry) => {
        totalValue += parseFloat(entry.value);
      });

      expense.totalEntryValue = totalValue.toFixed(2);
    });
  }

  if (!user) {
    return null;
  }

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
    </>
  );
}

export default HomePage;
