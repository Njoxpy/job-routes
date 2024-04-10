import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/help/Faq";
import Connect from "./pages/help/Connect";
import NotFound from "./pages/help/NotFound";

// layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="connect" element={<Connect />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
