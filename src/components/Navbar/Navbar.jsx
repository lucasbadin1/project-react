import React from "react"
import './styles.css';
import logo from '../../assets/images/logo.png'



class Navbar extends React.Component {

  render() {
    return (
        <header>
            <nav>
                <div className="nav-brand">
                    <img src={logo} alt="logo do Space Flight News" />
                    <h1>Space Flight News</h1>
                </div>

                <div className="nav-list">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Trending</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">About us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Navbar;