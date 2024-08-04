import './App.css';
import Profile from './Container/Home/Profile';
import About from './Container/AboutMe/About';
import Resume from './Container/Resume/Resume';
import Contact from './Container/ContactMe/Contact';
import Navbar from './Container/Navbar/Navbar';
import { Routes, Route  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
           <Route path="/" element={<><Profile /><About/> <Resume /><Contact /> </>}/>
           <Route path="/about" element={<About />}/>
           <Route path="/resume" element={<Resume />}/>
           <Route path="/contact" element={<Contact />}/>
           {/* <Route path="/profile" element={<Profile />}/> */}
            
            {/* <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/resume" exact>
              <Resume />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route> */}

      </Routes>
      

      {/* <Profile />
     
      <About />
      <Resume />
      <Contact /> */}
    </div>
  );
}

export default App;
