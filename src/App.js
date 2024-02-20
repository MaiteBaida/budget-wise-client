import "./styles/partials/_global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage.js";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import ExpenseOverview from "./pages/ExpenseOverview/ExpenseOverview.js";
import AddExpense from "./pages/AddExpense/AddExpense.js";
import EditExpense from "./pages/EditExpense/EditExpense.js";
import NewEntry from "./pages/NewEntry/NewEntry.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/expenses" element={<ExpenseOverview />} />
        <Route path="/expenses/add" element={<AddExpense />} />
        <Route path="/expenses/:id/edit" element={<EditExpense />} />
        <Route path="/expenses/:id/newentry" element={<NewEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
