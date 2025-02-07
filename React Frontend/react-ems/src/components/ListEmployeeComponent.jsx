// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { listEmployees, deleteEmployee } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] =  useState([])     

    const navigator = useNavigate()

    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error)
        }) 
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(empId) {
        navigator(`/update-employee/${empId}`)
    }
    
    function removeEmployee(empId) {
        deleteEmployee(empId)
        .then((response) => {
            getAllEmployees()
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div className='container'>
        
        <h2 className='text-center'>List Of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>



        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department ? employee.department.deptName : 'N/A'}</td>
                                <td>
                                    <button className="btn btn-info" onClick={ () => updateEmployee(employee.empId)}>Update</button>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={ () => removeEmployee(employee.empId)}
                                        style={{marginLeft: '10px'}}
                                    >Delete</button>
                                </td>
                            </tr>
                    )   
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default ListEmployeeComponent