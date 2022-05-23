import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <main className='App font-poppins' data-theme='arena-theme'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<Purchase />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default App;
