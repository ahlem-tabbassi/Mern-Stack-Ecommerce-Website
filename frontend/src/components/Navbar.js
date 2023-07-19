import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={require("../assets/lg.png").default} alt="logo" />
        </Link>
      </div>

      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/men">Men</Link>
        </li>
        <li className="navbar__link">
          <Link to="/women">Women</Link>
        </li>
        <li className="navbar__link">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/register">
            <i className="fas fa-user"></i>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

