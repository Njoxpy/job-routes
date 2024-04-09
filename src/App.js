import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);

function App() {
  return (
        <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
