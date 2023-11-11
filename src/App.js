// import logo from './logo.svg';
// import './App.css';
import SideNavbar from "./components/SideNavbar"
import Dashboard from "./pages/Dashboard";
import Manager from "./pages/Manager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
        <Router>
    <div className="grid grid-cols-2">
      <div className="w-auto">
        <SideNavbar/>
      </div>
      <div className="col-span-2 m-2 ml:pl-64 sm:pl-0 md:pl-64 lg:pl-64 xl:pl-64 2xl:pl-64">
      <Routes> 
                <Route exact path='/' element={< Dashboard />}></Route> 
                <Route exact path='/Manager' element={< Manager />}></Route> 
 
        </Routes> 
      </div>
      
      
    </div>
    </Router>
    </>
  );
}

export default App;
