import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut } from '../store/user/user.action'


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
            navigate('/login')
        }
        catch (err) {
            throw err
        }
    }

    return (
        <section className='app-header full'>
            <NavLink to="/" className='logo'>Stock<span>X</span>change</NavLink>
            <nav className='navbar'>
                <NavLink to="/" className='navlink'>Stock Exchange</NavLink>
                <NavLink to="/trader" className='navlink'>Traders</NavLink>
                <NavLink to="/account" className='navlink'>My account</NavLink>
                {loggedinUser && <button onClick={onLogout}>Logout</button>}
            </nav>
        </section>
    )
}