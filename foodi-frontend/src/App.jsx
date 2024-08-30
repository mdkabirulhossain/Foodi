
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Login from './components/Login/Login'

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div>
      {login? <Login setLogin={setLogin}></Login>: <></>}
      <Navbar setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element ={<Cart></Cart>}></Route>
        <Route path='/order' element ={<PlaceOrder></PlaceOrder>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
