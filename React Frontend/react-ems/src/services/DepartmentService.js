import axios from "axios";

const API_URL = "http://localhost:8080/api/departments";

export const listDepartments = () => { return axios.get(API_URL) };

export const createDepartment = (department) => { return axios.post(API_URL, department) };

export const getDepartment = (deptId) => { return axios.get(`${API_URL}/${deptId}`) };

export const updateDepartment = (deptId, department) => { return axios.put(`${API_URL}/${deptId}`, department) };

export const deleteDepartment = (deptId) => { return axios.delete(`${API_URL}/${deptId}`) };

export const listEmployeesByDepartment = (deptId) => { return axios.get(`${API_URL}/${deptId}/employees`) };

export const addEmployeeToDepartment = (deptId, empId) => { return axios.post(`${API_URL}/${deptId}/employees/${empId}`) };

export const removeEmployeeFromDepartment = (deptId, empId) => { return axios.delete(`${API_URL}/${deptId}/employees/${empId}`) };

//export const listDepartmentsByEmployee = (empId) => { return axios.get(`${API_URL}/employees/${empId}`) };

