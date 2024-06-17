import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return(
        <div>
            <h2 className="m-2 text-center fw-bold">Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit beatae sint.</p>

            <nav>
                <NavLink to="faq">View FAQ</NavLink>
                <NavLink to="connect">Connect</NavLink>
            </nav>

            <Outlet/>
        </div>
    )
}