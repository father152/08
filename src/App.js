import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Singlepage } from "./Components/Pages/Singlepage";
import { Notfound } from "./Components/Pages/Notfound";
import { Layout } from "./Components/Layout.jsx";
import { Building } from "./Components/Leftside/Building.jsx";
import { House } from "./Components/Leftside/House.jsx";
import { Flat } from "./Components/Leftside/Flat.jsx";
import {History} from './Components/Rightside/History';
import {Photo} from './Components/Rightside/Photo';
import {Contact} from './Components/Rightside/Contact';


function App() {
  return (
    <>
      <Routes className="center">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Singlepage />} />
          <Route path="*" element={<Notfound />} />
        </Route>

        <Route>
          <Route path="building" element={<Building />} />
          <Route path="house" element={<House />} />
          <Route path="flat" element={<Flat />} />
        </Route>

        <Route>
          <Route path="history" element={<History />} />
          <Route path="photo" element={<Photo />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
