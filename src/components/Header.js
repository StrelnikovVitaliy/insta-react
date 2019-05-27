import React, { Component } from 'react';
import logo from '../logo.svg';
import {NavLink, Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img alt="logo" src={logo}></img>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active" activeStyle={{ color:'red' }} className="menu__links" exact>Лента</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" activeClassName="active" activeStyle={{ color:'red' }} className="menu__links" exact>Профиль</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" activeClassName="active" activeStyle={{ color:'red' }} className="menu__links" exact>Коментарии</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;