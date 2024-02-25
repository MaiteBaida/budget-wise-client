import "./UserOverview.scss";
import Chart from "../Chart/Chart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserOverview() {
  const nav = useNavigate();
  const [user, setUser] = useState({});

  //authenticate user and get user's information including total budget and total spent
  const fetchUser = async () => {
    try {
      const authToken = await localStorage.getItem("authToken");

      const user = await axios.get("http://localhost:8000/users", {
        headers: { Authorization: authToken },
      });

      setUser(user.data);
    } catch (error) {
      alert("User not found");
      nav("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const totalsOverview = (userTotalBudget, userTotalEntries) => {
    const totalsOverview = userTotalBudget - userTotalEntries;

    const totalsOverviewString = totalsOverview.toFixed(2);

    const totalsOverviewNumber = parseFloat(totalsOverviewString);

    return totalsOverviewNumber;
  };

  const isBelow = user.userTotalBudget >= user.userTotalEntries;

  //Percentages to populate chart
  const percentageUsed = (user.userTotalEntries / user.userTotalBudget) * 100;
  const percentageLeft =
    ((user.userTotalBudget - user.userTotalEntries) / user.userTotalBudget) *
    100;

  console.log("Percentage of budget used:", percentageUsed.toFixed(2) + "%");
  console.log("Percentage of budget left:", percentageLeft.toFixed(2) + "%");

  return (
    <section className="user">
      <div className="user__container">
        <h1 className="user__title">Welcome, {user.first_name}!</h1>
        <p
          className={`user__overview ${
            isBelow ? "user__overview--below" : "user__overview--over"
          }`}
        >
          This month you're $
          {totalsOverview(user.userTotalBudget, user.userTotalEntries)}
          CAD {isBelow ? "below" : "over"} buget!
        </p>
        <p className="user__totals">Total Budget: ${user.userTotalBudget} </p>
        <p className="user__totals">Total Expenses: ${user.userTotalEntries}</p>
      </div>
      <div className="user__chart">
        <Chart budgetLeft={percentageLeft} entries={percentageUsed} />
      </div>
    </section>
  );
}

export default UserOverview;
