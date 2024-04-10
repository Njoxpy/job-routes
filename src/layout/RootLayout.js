import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div>
            <nav>
                <h1 className="fw-bold">Job Routes</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
}