import { Link, NavLink, useLocation } from "react-router-dom"


export function AppHeader() {


    return (
        <section className='app-header'>
            <NavLink to="/" className='logo'>Stock Exchange</NavLink>
            <nav className='navbar'>
                <NavLink to="/" >Stock Exchange</NavLink>
                <NavLink to="/trader" >Trader</NavLink>
                {/* <NavLink to="/user" >User</NavLink> */}
                <button>Logout</button>
            </nav>
        </section>
    )
}