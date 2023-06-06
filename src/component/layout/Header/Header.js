import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../../../Images/gga8.png';
import './Navbar.css';

const Header = () => {
  const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     navigate(`/products?keyword=${searchTerm}`);
  //   }
  // };
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products?keyword=${keyword}`);
    } else {
      navigate("/products");
    }
  };


  return (
    <header>
      <input type="checkbox" name="" id="chk1" />
      <div className="logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <div className="search-box">
        <form onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a Product ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <ul>
        <li>
          <Link to="/" className="Option">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="Option">
            Product
          </Link>
        </li>
        <li>
          <Link to="/contact" className="Option">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="Option">
            About
          </Link>
        </li>
        <li>
          <Link to="/cart" className="Option">
            <FaShoppingCart />
          </Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/login" className="Option">
            <FaUser />
          </Link>
        </li>
      </ul>
      <div className="menu">
        <label htmlFor="chk1">
          <FaBars />
        </label>
      </div>
    </header>
  );
};

export default Header;




