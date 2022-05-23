import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <main className='App font-poppins' data-theme='arena-theme'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<Purchase />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
