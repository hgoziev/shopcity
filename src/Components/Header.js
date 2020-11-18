import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";

import "../Style/Header.css";
import { useStateValue } from "../Context/StateProvider";
import logo from "../Assets/images/shop3.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/" className="header__logo__link">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <div className="header__search">
        <input className="header__input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option" onClick={handleAuth}>
          <span className="header__option__firstLine">Hello</span>
          <Link to={!user && "/login"} className="header__logo__link">
            <span className="header__option__secondLine">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <Link to="/orders" className="header__logo__link">
          <div className="header__option">
            <span className="header__option__firstLine">Returns</span>
            <span className="header__option__secondLine">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option__secondLine header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
