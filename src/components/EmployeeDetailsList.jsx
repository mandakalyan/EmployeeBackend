import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Link } from 'react-router-dom';
import {ImDownload3} from 'react-icons/im';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsFilter} from 'react-icons/bs';
import './Employee.css';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import EditChild from './EditEmployee';
import { updateChild } from "../services/updateService";




class EmployeeDetailsList extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      search: "",
      filteredEmployees: [],
      editingChild: null,


    };
  }
  handleEditClick = (child) => {
    this.setState({ editingChild: child });
  };

  handleSaveClick = (updatedChild) => {
    const empId = localStorage.getItem("empId");
  
    updateChild(empId, updatedChild)
      .then((response) => {
        console.log(response.data);
  
        const updatedChildren = this.state.children.map((child) => {
          if (child.empId === updatedChild.empId) {
            return updatedChild;
          }
          return child;
        });
  
        this.setState({ children: updatedChildren, editingChild: null });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  handleCancelClick = () => {
    this.setState({ editingChild: null });
  };


  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState(prevState => ({
  //     editingChild: {
  //       ...prevState.editingChild,
  //       [name]: value
  //     }
  //   }));
  // };
  
  handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.emp_name.toLowerCase().includes(searchValue)
    );
    this.setState({ filteredEmployees,search:searchValue });
  };
 
  componentDidMount() {
    
    let token = localStorage.getItem( "token" );
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const empId=localStorage.getItem('empId')
    axios

      .get(`http://localhost:8080/api/${empId}/children1`)
      .then((response) => {
        const employees = response.data;
        this.setState({ employees });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderEmployeeRow(employee,child) {
    return (
      
      <tr key={employee.emp_id}>
        <td>{employee.emp_id}</td>
        <td>{employee.emp_name}</td>
        <td>{employee.email}</td>
        <td>{employee.band_latest}</td>
        <td>{employee.joining_date_ss}</td>
        <td>{employee.joning_date_tesco_account}</td>
        <td>{employee.engagement}</td>
        <td>{employee.team}</td>
        <td>{employee.line_manager}</td>
        <td>{employee.office_location}</td>
        <td> {employee.gender}</td>
        <td>{employee.employee_otl_code}</td>
        <td>{employee.experience_in_ssg}</td>
        <td>{employee.experience_in_tesco}</td>
        <td>{employee.year_in_ssg}</td>
        <td>{employee.years_in_tesco}</td>
        <td>{employee.contact_number}</td>
        <td>{employee.role_1}</td>
        <td>{employee.status}</td>
        <td>
                    <button onClick={() => this.handleEditClick(employee)}>Edit</button>
                  </td>
       
        

        
      </tr>
    );
  }

  renderEmployeeTable(employees) {
    const { children, editingChild } = this.state;

    const {search} = this.state;
    const filteredEmployees = employees.filter(employee => {
      return employee.emp_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (editingChild) {
      return (
        <EditChild
           child={editingChild}
          onSaveClick={this.handleSaveClick}
          onCancelClick={this.handleCancelClick}
        />
      );}
      else{
    return (
   
      <div style={{width:"220%",marginLeft:"-90px", marginTop:"-1px"}}>
           <nav className="navbar" style={{backgroundColor:"white", marginLeft:"-20%"}} >
          <div className="navbar-brand"  style={{height:"50px",}}>
            
          <div  style={{display:"inline-block",color:"black",padding:"15px", font:"14px", marginRight:"900px", marginLeft:"-1490px"}}><GiHamburgerMenu/> </div>
          
          
         


        
         
        </div>
          <div className="vertical"></div>
          <span class="module-title">Employee Details</span>
          
          
          <div className="navbar-user">
            <Link to="/profile">
              <img src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="User Icon" className="user-icon" />
            </Link>
          </div>
        </nav>
  <nav className="nav" style={{backgroundColor:"#CF022B"}}>
  <div className="nav-brand"  style={{height:"50px",}}>
  <div class="dropdown">
  <span>Dropdown</span>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
  </div>
  </nav>
  <div className="input-group-append">
       <input
              type="text"
              
              placeholder="Search"
              value={this.state.search}
              onChange={(event) => this.setState({ search: event.target.value })}
              style={{width:"19%", marginLeft:"-75%", marginTop:"1%", fontSize:"90%"}}
            />

            
            </div>
            <div style={{marginLeft:"-20%"}}>
            
            <a href="#" onClick={() => document.getElementById('export-button').click()}>
  <div style={{marginTop:"-50px",marginLeft:"5%",  cursor:"pointer"}} className="ImDownload3"><ImDownload3/></div>
</a>           <div style={{marginTop:"-23.5px",marginLeft:"8%"}}><p>Name</p></div>
           <div style={{marginTop:"-45.9px", marginLeft:"11.2%", fontSize:"139%"}}><BsFilter/></div>
           <div style={{marginTop:"-28px", marginLeft:"14%"}}><p>Filter</p></div>
           </div>
      <div className="table-responsive" style={{marginLeft:"1%", marginRight:"48.9%",marginTop:"2%"}}>
        {/* <div className="download">
      <ReactHTMLTableToExcel
            table="sortTable"
            filename="employee-details"
            id="export-button"

            className="react-html-table-to-excel"
          />   </div>  */}
         
     
      <table
         class="table table-striped"   id="sortTable"
         >
        <thead style={{color:"black"}}>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>EmailId</th>
            <th>EmployeeBandLatest</th>
            <th>EmployeeJoiningDateSopraSteria</th>
            <th>EmployeeJoiningDateTescoAccount</th>
            <th>EmployeeEngagement</th>
            <th>EmployeeTeam</th>
            <th>EmployeeLineManager</th>
            <th>OfficeLocation</th>
            <th>Gender</th>
            <th>OTLCode</th>
            <th>SSGExperience</th>
            <th>TescoExperience</th>
            <th>SsgYears</th>
            <th>YearsInTesco</th>
            <th>EmployeeContactNumber</th>
            <th>Role1</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <React.Fragment key={employee.emp_id}>
              {this.renderEmployeeRow(employee)}
              {employee.children.map((child) => (
                <tr key={child.emp_id}>
                  <td>{child.emp_id}</td>
                  <td>{child.emp_name}</td>
                  <td>{child.email}</td>
                  <td>{child.band_latest}</td>
                  <td>{child.joining_date_ss}</td>
                  <td>{child.joning_date_tesco_account}</td>
                  <td>{child.engagement}</td>
                  <td>{child.team}</td>
                  <td>{child.line_manager}</td>
                  <td>{child.office_location}</td>
                  <td> {child.gender}</td>
                  <td>{child.employee_otl_code}</td>
                  <td>{child.experience_in_ssg}</td>
                  <td>{child.experience_in_tesco}</td>
                  <td>{child.year_in_ssg}</td>
                  <td>{child.years_in_tesco}</td>
                  <td>{child.contact_number}</td>
                  <td>{child.role_1}</td>
                  <td>{child.status}</td>
                  <td>
                    <button onClick={() => this.handleEditClick(child)}>Edit</button>
                  </td>
                  
                </tr>
              ))}
            </React.Fragment>
          ))}
         


        
        </tbody>
      </table>
      </div>
      </div>
    );
  }}

  render() {
    return <div>{this.renderEmployeeTable(this.state.employees)}</div>;
  }
}

export default EmployeeDetailsList;

