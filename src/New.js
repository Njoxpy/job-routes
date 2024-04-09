// react router
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Link, 
    NavLink 
  } from "react-router-dom";
  
  // pages
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  
  // csss
  import "./styles.css";
  
  function App() {
    return (
      <BrowserRouter>
        <header>
          <h1>Job Routes</h1>
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
  
  export default App;
  