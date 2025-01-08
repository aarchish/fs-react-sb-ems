import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => { return axios.get(API_URL) };

export const createEmployee = (employee) => { return axios.post(API_URL, employee) };

export const getEmployee = (empId) => { return axios.get(`${API_URL}/${empId}`) };

export const updateEmployee = (empId, employee) => { return axios.put(`${API_URL}/${empId}`, employee) };

export const deleteEmployee = (empId) => { return axios.delete(`${API_URL}/${empId}`) };