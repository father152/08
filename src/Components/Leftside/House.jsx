import {Link, NavLink} from 'react-router-dom';
import image from './3.jpg';

const House = () => {
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
<div className='house'>
        <h1>House</h1>
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

        <div className='button'>
        <button><Link  to="/">Home</Link></button>
       
        </div>
        <footer>All Rights Reserved 2022-2023</footer>
      </div>
    );
  };
  
  export { House };