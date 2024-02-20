import axios from "axios";
import EssentialExpenses from "../../components/EssentialExpenses/EssentialExpenses";
import FixedExpenses from "../../components/FixedExpenses/FixedExpenses";
import NonEssentialExpenses from "../../components/NonEssentialExpensesTable/NonEssentialExpenses";
import UserOverview from "../../components/UserOverview/UserOverview";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

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

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <main className="home">
      <UserOverview />
      <FixedExpenses />
      <EssentialExpenses />
      <NonEssentialExpenses />
    </main>
  );
}

export default HomePage;
