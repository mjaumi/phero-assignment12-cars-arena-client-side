import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <main className='App font-poppins' data-theme='arena-theme'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/purchase/:id' element={<Purchase />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<MyProfile />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='manageProducts' element={<ManageProducts />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  );
}

export default App;
