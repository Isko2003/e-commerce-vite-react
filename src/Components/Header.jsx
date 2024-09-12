import React, { useState } from "react";
import "../CSS/Header.css";
import logo from "../Images/logo-image.jpg";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../Redux/Slices/basketSlice";
const Header = () => {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>;

  return (
    <div className="d-flex align-items-center gap-3 justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <Link to={"/e-commerce-vite-react"} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <p className="m-0 p-0">Isko MMC</p>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <input
          type="text"
          placeholder="Search something"
          className="search-input"
        />
        <div>
          {theme ? (
            <FaMoon className="react-icons" onClick={changeTheme} />
          ) : (
            <CiLight className="react-icons" onClick={changeTheme} />
          )}
        </div>
        <div>
          <Badge
            badgeContent={products.length}
            color="primary"
            onClick={() => dispatch(setDrawer())}
          >
            <FaShoppingBasket className="react-icons" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
