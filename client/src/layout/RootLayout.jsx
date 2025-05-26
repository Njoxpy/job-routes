import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div className="p-8">
        <div>
          <h1 className="font-bold text-center text-blue-800 text-2xl m-2">Job Routes</h1>
        </div>
        <nav className="text-center">
          <NavLink
            to="/"
            className="px-4 py-2 text-xl font-semibold focus:text-blue-600 hover:underline hover:text-blue-950"
          >
            Home
          </NavLink>
          <NavLink
            to="/careers"
            className="px-4 py-2 text-xl font-semibold focus:text-blue-600 hover:underline hover:text-blue-950"
          >
            Careers
          </NavLink>
          <NavLink
            to="/about"
            className="px-4 py-2 text-xl font-semibold focus:text-blue-600 hover:underline hover:text-blue-950"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 py-2 text-xl font-semibold focus:text-blue-600 hover:underline hover:text-blue-950"
          >
            Contact
          </NavLink>
          <NavLink
            to="/help"
            className="px-4 py-2 text-xl font-semibold focus:text-blue-600 hover:underline hover:text-blue-950"
          >
            Help
          </NavLink>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

/*
Colors
- Background colors
- text colors
- hover, focus and active colors suggestion

Margin, padding
- Horizontal padding px-4 , vertical padding py-2

Font Size
- Main navigation bar: 16px to 18px
- Dropdown Menus: Font Size: 14px to 16px
- Breadcrumb Navigation:Font Size: 14px
- Sidebar Navigation (if applicable):Font Size: 14px to 16px

Effect
- hover state, focus state.

- Navlinks should be text-xl while font should be semibold

Logo
- text-2xl font-bold text-yellow-500
 */
