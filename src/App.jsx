import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider
} from "react-router-dom";


// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/help/Faq";
import Connect from "./pages/help/Connect";
import NotFound from "./pages/NotFound";
import CareersDetails, { careersDetailsLoader } from "./pages/careers/CareersDetails";

// layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layout/CareersLayout";

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

      <Route path="careers" element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        ></Route>

        <Route
          path=":id"
          loader={careersDetailsLoader}
          element={<CareersDetails />}
        >
        </Route>
      </Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
