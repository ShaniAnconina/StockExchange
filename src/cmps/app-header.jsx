import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logOut } from "../store/user/user.action"
import { useEffect } from "react"


export function AppHeader() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedinUser) navigate('/login')
        
    }, []
    )

    function onLogout() {
        try {
            logOut()
            console.log('You logged out successfully!')
        }
        catch (err) {
            throw err
        }
    }

    return (
        <section className='app-header'>
            <NavLink to="/" className='logo'>Stock Exchange</NavLink>
            <nav className='navbar'>
                <NavLink to="/" >Stock Exchange</NavLink>
                <NavLink to="/trader" >Trader</NavLink>
                <NavLink to="/account" >User</NavLink>
                {loggedinUser && <button onClick={onLogout}>Logout</button>}

            </nav>
        </section>
    )
}