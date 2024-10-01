// Nav.js
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Main from './Main.js';
import BookingPage from './BookingPage.js';
import '../Nav.css';
import logo from '../assets/images/Asset 16@4x.png';

function Nav() {
    const location = useLocation(); // Obtener la ubicación actual

    return (
        <div>
            <div className="container">
                <nav className="navbar">
                    <img src={logo} alt="Little Lemon main logo" className="logo" />
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''}>Booking</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </div>
    );
}

export default Nav;
