import React, {Component} from 'react';

class NavBar extends Component{
    
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#n">Navbar
                    <span className="badge badge-pill badge-primary ml-3">Total Products:{this.props.totalProducts}</span>
                    {
                        this.props.totalCounts > 0 &&
                        <span className="badge badge-pill badge-secondary ml-3">Total Counts:{this.props.totalCounts}</span>
                    }
                </a>
            </nav>
        )
    }

}

export default NavBar;
