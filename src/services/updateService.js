import axios from 'axios';

export const updateChild = (empId, updatedChild) => {
  const token = localStorage.getItem("token");
  return axios.put(`http://localhost:8080/api/${empId}/updatechild`, updatedChild, 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
