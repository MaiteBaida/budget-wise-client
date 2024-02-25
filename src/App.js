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
import EditEntry from "./pages/EditEntry/EditEntry.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app__container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/expenses/add" element={<AddExpense />} />
          <Route path="/expenses/:id" element={<ExpenseOverview />} />
          <Route path="/expenses/:id/edit" element={<EditExpense />} />
          <Route path="/expenses/:id/entries/add" element={<NewEntry />} />
          <Route
            path="/expenses/:id/entries/:entryid/edit"
            element={<EditEntry />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
