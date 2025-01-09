// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { listDepartments } from '../services/DepartmentService'

const EmployeeComponent = () => {

  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email, setEmail] = useState('')
  const[department, setDepartment] = useState({ deptId: '', deptName: '' })
  const[departments, setDepartments] = useState([])

  const navigate = useNavigate()
  const { empId } = useParams()

  useEffect(() => {
    listDepartments().then( (response) => {
      setDepartments(response.data) })
    .catch( error => {
      console.error(error) }
    )
  }, [])

  useEffect(() => {
    if(empId) {
      getEmployee(empId)
      .then(
        response => {
          let employee = response.data
          setFirstName(employee.firstName)
          setLastName(employee.lastName)
          setEmail(employee.email)
          setDepartment(employee.department)
        }
      )
      .catch(
        error => {
          console.error(error)
        }
      )
    }
  }, [empId])

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handleDepartment(e){
    const selectedDept = departments.find(dept => dept.deptId === parseInt(e.target.value));
    setDepartment(selectedDept);
  }

  function saveOrUpdateEmployee(e){
    e.preventDefault()
    
    if(validateForm()) {
      let employee = {firstName, lastName, email, department}
    
      if(empId) {
        updateEmployee(empId, employee).then(
          response => {
            console.log(response.data)
            navigate('/employees')
          }
        ).catch(error => {
          console.error(error)
        })
      } else {
        createEmployee(employee).then(
          response => { 
            console.log(response.data) 
            navigate('/employees')
          }
        ).catch(error => {
          console.error(error)
        })
      }
    } else {
      console.log('Form has errors')
    }
  }

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  function validateForm() {
    let formIsValid = true;
    let errors = {};

    if (!firstName) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your first name.";
    }

    if (!lastName) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your last name.";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (!department.deptId) {
      formIsValid = false;
      errors["department"] = "*Please select a department.";
    }

    setErrors(errors);
    return formIsValid;
  }

  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h3 className='text-center'>{empId ? 'Update Employee' : 'Add Employee'}</h3>
          <div className='card-body'>
            <form onSubmit={saveOrUpdateEmployee}>
              <div className='form-group'>
                <label className='form-label'>First Name:
                  <input 
                    type='text' 
                    placeholder='Enter Employee First Name' 
                    name='firstName' 
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    value={firstName} 
                    onChange={handleFirstName} 
                  />
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </label>
              </div>
              <div className='form-group'>
                <label className='form-label'>Last Name:
                  <input
                    type='text'
                    placeholder='Enter Employee Last Name'
                    name='lastName' 
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    value={lastName} 
                    onChange={handleLastName}
                  />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </label>
              </div>
              <div className='form-group'>
                <label className='form-label'>Email:
                  <input
                    type='text'
                    placeholder='Enter Employee Email'
                    name='email' 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={email} 
                    onChange={handleEmail}
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </label>
              </div>
              <div className='form-group'>
                <label className='form-label'>Department:
                  <select
                    name='department'
                    className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                    value={department.deptId}
                    onChange={handleDepartment}
                  >
                    <option value=''>Select Department</option>
                    {departments.map(department => (
                      <option key={department.deptId} value={department.deptId}>
                        {department.deptName}
                      </option>
                    ))}
                  </select>
                  {errors.department && <div className='invalid-feedback'>{errors.department}</div>}
                </label>
              </div>
              <button type='submit' className='btn btn-primary'>{empId ? 'Update' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;