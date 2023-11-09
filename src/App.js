// import logo from './logo.svg';
// import './App.css';
import SideNavbar from "./components/SideNavbar"
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
    <div className="grid grid-cols-2">
      <div className="w-auto">
        <SideNavbar/>
      </div>
      <div className="col-span-2 pl-64">
      <Dashboard />
      </div>
      
      
    </div>
    </>
  );
}

export default App;
