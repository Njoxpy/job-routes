import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="p-8">
      <h2 className="text-center font-bold">Website Help</h2>

      <nav className="text-center mt-2 focus:text-white">
        <NavLink to="faq" className="bg-secondary p-2 text-white font-bold">
          View FAQ
        </NavLink>
        <NavLink to="connect" className="bg-secondary p-2 text-white ml-2 font-bold">
          Connect
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
