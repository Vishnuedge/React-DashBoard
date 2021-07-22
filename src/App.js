import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div id="wrapper" >
      
        <Sidebar />
 
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;