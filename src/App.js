import './styles/partials/_global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage.js';


function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<HomePage />}/> 
    //      {/* <Route path="/videos/:videoId" element={<User />}/> */}
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Header/>
      <HomePage/>
    </BrowserRouter>
  );
}

export default App;
