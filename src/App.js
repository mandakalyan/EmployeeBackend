import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import EmployeeDetailsList from './components/EmployeeDetailsList';
import PowerBI from './components/powerbi';


function App() {
 


  return (
   <div>
      
      <BrowserRouter>
        
        <div className="container">
          <Routes>          
             <Route exact path="/" element={<Login/>} />
             <Route path="/list" element={<EmployeeDetailsList/>}  />
             <Route path="/redirect" element={<PowerBI/>}/>
          </Routes>
        </div>
        <footer className="footer">
          <div className="footer-info">
            © 2023 Soprasteria
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

