import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
import CustomProject from "./components/pages/CustomProject";

import { useEffect, useState } from "react";

function App() {
  const [tab, setTab] = useState('Home')
  // console.log('render')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab])

  return (
    <>
      <Router>
        <Navbar tab={tab} setTab={setTab}/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path='/project/:id' element={<CustomProject/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
