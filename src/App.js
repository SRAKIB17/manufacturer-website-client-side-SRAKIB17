
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='p-2'>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
