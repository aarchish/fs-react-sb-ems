// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email, setEmail] = useState('')

  const navigate = useNavigate()
  const { empId } = useParams()

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function saveOrUpdateEmployee(e){
    e.preventDefault()
    
    if(validateForm()) {
      let employee = {firstName, lastName, email}
    
      if(empId) {
        updateEmployee(empId, employee)
        .then( (response) => {
          console.log(response.data)
          navigate('/employees')
        })
        .catch( error => {
          console.error(error)
        })
      }
    
      else {
        createEmployee(employee)
        .then(
          response => { 
            console.log(response.data) 
            navigate('/employees')
        })
        .catch(
          error => {
            console.error(error)

        })
      }
    }
    else {
      console.log('Form has errors')
    }
  }

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
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

    setErrors(errors);
    return formIsValid;
  }

  function pageTitle() {
    if(empId) return <h2 className='text-center'>Update Employee</h2>
    else return <h2 className='text-center'>Add Employee</h2>
  }

  useEffect(() => {
    if(empId) {
      getEmployee(empId)
      .then(
        response => {
          let employee = response.data
          setFirstName(employee.firstName)
          setLastName(employee.lastName)
          setEmail(employee.email)
        }
      )
      .catch(
        error => {
          console.error(error)
        }
      )
    }
  }, [empId])

  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
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
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;