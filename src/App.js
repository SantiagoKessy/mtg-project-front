import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/base/Footer'
import Header from '../src/components/base/Header'
import Home from '../src/components/base/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
