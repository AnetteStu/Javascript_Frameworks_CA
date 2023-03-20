import Layout from './components/Layout';

import FrontPage from './pages/FrontPage';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

import { ThemeProvider } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/css/default.css'

import { Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Details from './pages/Details';
import CheckoutSuccess from './pages/CheckoutSuccess';


function App() {
  return (
    <>
      <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      >
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<FrontPage/>}/>
              <Route path="/products/:id" element={<Details/>}/>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="checkoutsuccess" element={<CheckoutSuccess/>}></Route>
              <Route path="*" element={<NoPage/>}></Route>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
