import { useContext } from 'react'
import NavigationBar from "./components/NavBar"
import './components/css/Universal.css'
import Footer from './components/Footer';
import AddedInCart from './components/AddedInCart'
import Authenticate from './components/authenticate/Authenticate'
import Contact from './components/info/Contact'
import About from './components/info/About'
import Home from './components/Home'
import Category from './components/Category'
import ItemDetails from './components/ItemDetails';


import userContext from './components/context/Context';
import {Link, NavLink, Routes, Route} from "react-router-dom";



function App() {
  const value = useContext(userContext)

  return (
    <>
        <NavigationBar></NavigationBar>  {/* //NavBAr appears in all page*/}

     <Routes>   {/* //When click on Specific link  */}
      <Route path='/member' element={<Authenticate></Authenticate>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/info/contact' element={<Contact></Contact>}></Route>
      <Route path='/info/about' element={<About></About>}></Route>
      <Route path='/AddedInCart' element={<AddedInCart></AddedInCart>}></Route>
      <Route path='/category' element={<Category></Category>}></Route>
      <Route path='/ItemDetails' element={<ItemDetails></ItemDetails>}>
      <Route path='/ItemDetails/:id' element={<ItemDetails></ItemDetails>}></Route>

      </Route>

    </Routes>

    <Footer></Footer>      {/* //Footer appears in all page*/}
    </>
  )
}
export default App
