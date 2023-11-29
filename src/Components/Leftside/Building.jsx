import { Link, NavLink } from "react-router-dom";
import image from "./Bitmap.png";
import icongoogle from './google.png';
import iconfacebook from './facebook.png';
import icontwitter from './twitter.png';


const Building = () => {
  return (
    <div>
      <header>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/blog" className="link">
          Blog
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
      </header>
      <div className="building">
        <h1>Building</h1>
        <p>
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom
        </p>
        <div className="pic">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="button">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>

      <div className="link-building">
        <div className="leftlink">
          <ul className="leftlink">
            <li>
            <NavLink to=''>  
             <img src={icongoogle} alt="" />
           </NavLink>
            </li>
            <li>
              <a>  <img src={iconfacebook} alt="" /></a>
            </li>
            <li>
              <a>  <img src={icontwitter} alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
      <footer>All Rights Reserved 2022-2023</footer>
    </div>
  );
};

export { Building };
