import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-lightt" >
                            <a className="navbar-brand" href="/" style={{color:'black'}}>AKS Cosmetics</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <NavLink activeClassName="menu_active" className="nav-link" exact to="/">Home</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link"  exact to="/blog">Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" exact to="contact">Contact</NavLink>
                                        </li>
                                    </ul>
                            </div>
                        </nav>
                </div>
                </div>
            </div>
        </>
    );
}
export default Header;