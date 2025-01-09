import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
    return axios.get(API_URL).catch((error) => {
      console.error('Error fetching employees:', error);
      throw error;
    });
  };

export const createEmployee = (employee) => {
    return axios.post(API_URL, employee).catch((error) => {
      console.error('Error creating employee:', error);
      throw error;
    });
  };

export const getEmployee = (empId) => {
    return axios.get(`${API_URL}/${empId}`).catch((error) => {
      console.error('Error fetching employee:', error);
      throw error;
    });
  };

export const updateEmployee = (empId, employee) => {
    return axios.put(`${API_URL}/${empId}`, employee).catch((error) => {
      console.error('Error updating employee:', error);
      throw error;
    });
  };

export const deleteEmployee = (empId) => {
    return axios.delete(`${API_URL}/${empId}`).catch((error) => {
      console.error('Error deleting employee:', error);
      throw error;
    });
  };