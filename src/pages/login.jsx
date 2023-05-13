import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/user/user.action'
import { userService } from '../services/user.service'

export function Login() {
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)
    const navigate = useNavigate()

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }

    function onSubmit(ev) {
        ev.preventDefault()
        try {
            login(credentials)
            navigate('/')
            alert('You logged in successfully!')
        }
        catch (err) {
            throw err
        }
    }

    return (
        <section className='login'>
            {!loggedinUser && <form className="login-form" onSubmit={onSubmit}>
                <h1>Hello Trader,</h1>
                <h2>Please enter your trader ID to login</h2>
                <div className="login-form">
                    < input type="password"
                        name="id"
                        value={credentials.id}
                        placeholder="Trader ID"
                        onChange={handleChange}
                    />
                    <button>Login</button>
                </div>
            </form>}
        </section >
    )
}