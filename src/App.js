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
import Admin from './component/Admin';
import NoteFound from './component/NoteFound/NoteFound';
import OrderPayment from './component/Dashboard/User/OrderPayment';
import Blogs from './component/Blogs/Blogs';
import AllReview from './component/AllReview/AllReview';
import ShowAllProduct from './component/Home/NewProduct/ShowAllProduct';


function App() {
  const { admin } = useCheckAdmin()
  return (
    <div className='m-2 w-full overflow-hidden'>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Admin />} />
        <Route path='/products/:newI' element={<ShowAllProduct />} />
        <Route path='/purchase/:id' element={<Private><Purchase /></Private>} />
        <Route path='/payment/:orderId/:productId' element={<Private><OrderPayment /></Private>} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/reviews' element={<AllReview />} />

        <Route path='/dashboard' element={<Private><Dashboard /></Private>}>
          <Route index element={<MyProfile />} />
          <Route path='profile' element={<MyProfile />} />
          {
            admin?.admin ||
            <>
              <Route path='add-review' element={<AddReview />} />
              <Route path='my-order' element={<MyOrder />} />
            </>
          }
          {/* Private auth */}
          {
            admin?.admin && <>
              <Route path='add-product' element={<AddProduct />} />
              <Route path='users' element={<MakeAdmin />} />
              <Route path='manage-products' element={<ManageProducts />} />
              <Route path='manage-orders' element={<ManageAllOrders />} />

            </>
          }
        </Route>
        <Route path='*' element={<NoteFound />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
