import { Link, NavLink } from "react-router-dom";
import image from './png-2757379_960_720.webp';

const Contact = () => {
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

      <div className="contact">
        <h1>Contact</h1>
        <p>
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom
        </p>
        <div className='pic'>
        <img  src={image} alt=""/>
       
        </div>
      </div>
      <div className="button">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <footer>All Rights Reserved 2022-2023</footer>
    </div>
  );
};

export { Contact };
