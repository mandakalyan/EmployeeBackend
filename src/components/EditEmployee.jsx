import React, { useState } from 'react';

function EditChild(props) {
  const [child, setChild] = useState(props.child);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setChild(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
 



  const handleSaveClick = () => {
    props.onSaveClick(child);
  };

  const handleCancelClick = () => {
    props.onCancelClick();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Emp Name</th>
            {/* repeat for each column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{child.empId}</td>
            <td><input type="text" name="emp_name" value={child.emp_name} onChange={handleInputChange} /></td>
            <td><input type="text" name="email" value={child.email} onChange={handleInputChange} /></td>
            <td><input type="text" name="employee_otl_code" value={child.employee_otl_code} onChange={handleInputChange} /></td>

            

            {/* repeat for each editable property */}
            <td>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EditChild;
