import Navbar from "./Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import Profile from './Profile'
import Cart from './Cart'
import Mobile from './Mobile'
import AllUserComponents from "./AllComponents"
import Counter from "./Usestate"
import Resgister from "./RegisterComponents/Resgister"

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes >
          <Route path="/" element={<Resgister/>} >
          </Route>

           <Route path="/buyer" element={<AllUserComponents />}>
            {/* OUTLET */}
            <Route index element={<Home />} />
            <Route path="mobile" element={<Mobile />}/>
            <Route path="cart" element={<Cart />}/>
           </Route>
        </Routes>
     </BrowserRouter>
    </>
   
  )
}

export default App
