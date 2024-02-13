import './styles/partials/_global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage.js';
import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import EditTable from './pages/EditTable/EditTable.js';
import ExpenseItem from './pages/ExpenseItem/ExpenseItem.js';
import EditExpenseItem from './pages/EditExpenseItem/EditExpenseItem.js';
import AddExpenseItem from './pages/AddExpenseItem/AddExpenseItem.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Signup />}/> 
        <Route path="/fixedexpenses/edit" element={<EditTable />}/>
        <Route path="/essentialexpenses/edit" element={<EditTable />}/> 
        <Route path="/nonessentialexpenses/edit" element={<EditTable />}/> 
        <Route path="/expense/:id" element={<ExpenseItem />}/> 
        <Route path="/expense/:id/edit" element={<EditExpenseItem />}/> 
        <Route path="/expense/:id/add" element={<AddExpenseItem />}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
