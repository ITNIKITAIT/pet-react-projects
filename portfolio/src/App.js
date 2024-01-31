import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
// import CustomProject from "./components/pages/CustomProject";

import { useState } from "react";

function App() {
  const [tab, setTab] = useState('Home')
  console.log('render')

  return (
    <>
      <Navbar tab={tab} setTab={setTab}/>
      {tab === 'Home' && <Home/>}
      {tab === 'Projects' && <Projects/>}
      {tab === 'Contacts' && <Contacts/>}
      {/* <CustomProject/> */}
      <Footer/>
    </>
  );
}

export default App;
