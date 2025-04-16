import { createRoot } from 'react-dom/client'
import {Header,Footer} from './Navbar'
import ShuffleHero from './Stat'
import Counter from './useeffect'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MainContent from './All'
import Home from './Home';

createRoot(document.getElementById('root')).render(
  <div  >
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<MainContent />}>
          <Route index element={<ShuffleHero />}></Route>
          <Route path='home' element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);