// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { listDepartments, deleteDepartment } from '../services/DepartmentService'

const ListDepartmentComponent = () => {

    
        const [departments, setDepartments] =  useState([])     
    
        const navigator = useNavigate()
    
        useEffect(() => {
            getAllDepartments()
        }, [])
    
        function getAllDepartments() {
            listDepartments().then((response) => {
                setDepartments(response.data)
            }).catch(error => {
                console.error(error)
            }) 
        }
    
        function addNewDepartment() {
            navigator('/add-department')
        }
    
        function updateDepartment(deptId) {
            navigator(`/update-department/${deptId}`)
        }
        
        function removeDepartment(deptId) {
            deleteDepartment(deptId)
            .then((response) => {
                getAllDepartments()
            })
            .catch(error => {
                console.log(error)
            })
        }

    return (
        <div className='container'>
            
            <h2 className='text-center'>List Of Departments</h2>
            <button className="btn btn-primary mb-2" onClick={addNewDepartment}>Add Department</button>
    
    
    
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(
                            department =>
                                <tr key={department.deptId}>
                                    <td>{department.deptId}</td>
                                    <td>{department.deptName}</td>
                                    <td>{department.deptDescription}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={ () => updateDepartment(department.deptId)}>Update</button>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={ () => removeDepartment(department.deptId)}
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

export default ListDepartmentComponent