import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App'

const NavBar = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/admin">Admin</Link></li>,
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">CreatePost</Link></li>,
                <li>
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => {
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                        history.push('/signin')
                    }}>
                        LOGOUT
                </button>
                </li>
            ]
        }
        else {
            return [
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to={state ? "/" : "/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                    {/* <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">CreatePost</Link></li> */}
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;