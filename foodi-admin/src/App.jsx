
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:5000";

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className='flex'>
        <div className=''>
          <Sidebar ></Sidebar>
        </div>
        <div className='flex-1'>
        <Routes>
          <Route path='/add' element={<Add url={url}></Add>} />
          <Route path='/list' element={<List url={url}></List>} />
          <Route path='/order' element={<Order url={url}></Order>} />
        </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
