import axios from "axios";
import ExpensesTables from "../../components/ExpensesTables/ExpensesTables";
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
      <ExpensesTables />
    </main>
  );
}

export default HomePage;
