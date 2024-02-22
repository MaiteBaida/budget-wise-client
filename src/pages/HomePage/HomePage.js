import axios from "axios";
import ExpensesTables from "../../components/ExpensesTables/ExpensesTables";
import UserOverview from "../../components/UserOverview/UserOverview";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);

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

  const [expenseId, setExpenseId] = useState("");

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

  if (!user) {
    return null;
  }

  return (
    <main className="home">
      <UserOverview />
      <ExpensesTables />
    </main>
  );
}

export default HomePage;
