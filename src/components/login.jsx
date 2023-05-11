// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Check for token in local storage on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       navigate('/list');

//     }
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     axios.post('http://localhost:8080/auth/signin', { email, password })
//       .then(res => {
//         const token = res.data.token;
//         const empId = res.data.empId;

//         localStorage.setItem('token', token); // store token in local storage
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the default authorization header for all axios requests
//         localStorage.setItem('empId',empId);
//         // navigate('/employee/:empId', { state: { empId: empId } });
//         // navigate to the dashboard page
//         //  <Link to={"/employee/:empId" {state:{empId:empId}}}>
//         navigate('/list')
//       })
//       .catch(err => setError(err.response.data.message));
//   }

//   return (
//     <div style={{
//       backgroundImage: "url('./images/sopra.png')",
//       // backgroundSize: "cover",
//       // backgroundPosition: "center",
//       // height: "100vh",
//       // display: "flex",
//       // alignItems: "center",
//       // justifyContent: "center"}}
//     }}>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='email' style={{ display: "inline-block", width: "100px", textAlign: "right", marginRight: "10px" }}> Email:</label>
//           <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor='password' style={{ display: "inline-block", width: "100px", textAlign: "right", marginRight: "10px" }}>Password:</label>
//           <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && <div>{error}</div>}
//     </div>
//   );
// }

// export default Login;





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/signin', { email, password })
      .then(res => {
        const token = res.data.token;
         const empId = res.data.empId;

        localStorage.setItem('token', token); // store token in local storage
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the default authorization header for all axios requests
        localStorage.setItem('empId',empId);
        // navigate('/employee/:empId', { state: { empId: empId } });
            // navigate to the dashboard page
            //  <Link to={"/employee/:empId" {state:{empId:empId}}}>
            navigate('/list')
      })
      
      .catch(err => setError(err.response.data.message));
  }

  return (
    <div style={{
      backgroundImage: "url('./images/sopra.png')",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // height: "100vh",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center"}}
    }}>
      
     <div style={{textAlign:"left",marginLeft:"-111px"}}> <img src="https://www.mckinsey.com/spContent/bespoke/netzero-sector-page/desktop-building.jpg" alt="Flowers in Chania" style={{width: "65%",height:"620px",float: "left",padding:"-100px",marginTop:"-50px"}}/></div>
      <form onSubmit={handleSubmit}>
      <img src="https://i.pinimg.com/564x/15/fb/2a/15fb2aa0cec12d86306450ffef1807e1.jpg" alt="Flowers in Chania" style={{width: "190px",marginRight: "5px", marginTop:"-80px"}}/>
        <div style={{marginRight:"-38px", width:"85%",height:"25%"}}>
          <label htmlFor='email'   style={{ display: "inline-block", width: "50%", textAlign: "right", marginRight: "200p%", marginTop:"30px" }}> </label>
          <input type="email" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)}  />
        </div>
        <div style={{marginRight:"-38px",width:"85%",  marginTop:"-10px"}}> 
          <label htmlFor='password'   style={{ display: "inline-block", width: "100px", textAlign: "right", marginRight: "190px" }}></label>
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{marginRight: "219px",marginTop:"60px",}}>Signin</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.css';
// import EmployeeTree from './Employee';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [employee, setEmployee] = useState(null);
//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     axios.post('http://localhost:8080/auth/signin', { email, password })
//       .then(res => {
//         const token = res.data.token;
//         const empId = res.data.empId;

//         localStorage.setItem('token', token); // store token in local storage
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the default authorization header for all axios requests

//         axios.get(`http://localhost:8080/api/${empId}/children`)
//           .then(response => {
//             const employee = response.data;
//             setEmployee(employee);
//           })
//           .catch(error => {
//             console.error(error);
//           });

//         navigate('/dashboard', { state: { empId: empId } });  // navigate to the dashboard page
//       })
//       .catch(err => setError(err.response.data.message));
//   }

//   return (
//     <div style={{
//       backgroundImage: "url('./images/sopra.png')",
//       // backgroundSize: "cover",
//       // backgroundPosition: "center",
//       // height: "100vh",
//       // display: "flex",
//       // alignItems: "center",
//       // justifyContent: "center"}}
//     }}>
//       {employee ? (
//         <EmployeeTree employee={employee} />
//       ) : (
//         <div>
//           <h1>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor='email' style={{ display: "inline-block", width: "100px", textAlign: "right", marginRight: "10px" }}> Email:</label>
//               <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//             </div>
//             <div>
//               <label htmlFor='password' style={{ display: "inline-block", width: "100px", textAlign: "right", marginRight: "10px" }}>Password:</label>
//               <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//           {error && <div>{error}</div>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
