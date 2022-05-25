import { ToastContainer } from 'react-toastify'
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './component/Purchase/Purchase';
import Private from './component/Login/Private';
import Dashboard from './component/Dashboard/Dashboard';
import MyProfile from './component/Dashboard/MyProfile';
import AddReview from './component/Dashboard/User/AddReview';
import MyOrder from './component/Dashboard/User/MyOrder';
import AddProduct from './component/Dashboard/Admin/AddProduct/AddProduct';
import MakeAdmin from './component/Dashboard/Admin/MakeAdmin';
import ManageProducts from './component/Dashboard/Admin/ManageProducts';
import ManageAllOrders from './component/Dashboard/Admin/ManageAllOrders';
import useCheckAdmin from './component/hooks/useCheckAdmin';

function App() {
  const { admin } = useCheckAdmin()
  return (
    <div className='m-2 w-full overflow-hidden'>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchase/:id' element={<Private><Purchase /></Private>} />

        <Route path='/dashboard' element={<Private><Dashboard /></Private>}>
          <Route index element={<MyProfile />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='my-order' element={<MyOrder />} />

          {
            admin?.admin && <>
              <Route path='add-product' element={<AddProduct />} />
              <Route path='users' element={<MakeAdmin />} />
              <Route path='manage-products' element={<ManageProducts />} />
              <Route path='manage-orders' element={<ManageAllOrders />} />

            </>
          }
        </Route>

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
