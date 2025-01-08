// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { createDepartment, getDepartment, updateDepartment } from '../services/DepartmentService'


const DepartmentComponent = () => {

  const[deptName, setDeptName] = useState('')
  const[deptDescription, setDeptDescription] = useState('')

  const navigate = useNavigate()
  const { deptId } = useParams()

  function handleDeptName(e){
    setDeptName(e.target.value)
  }

  function handleDeptDescription(e){
    setDeptDescription(e.target.value)
  }

  function saveOrupdateDepartment(e){
    e.preventDefault()
    
    if(validateForm()) {
      let department = {deptName, deptDescription}
    
      if(deptId) {
        updateDepartment(deptId, department)
        .then( (response) => {
          console.log(response.data)
          navigate('/departments')
        })
        .catch( error => {
          console.error(error)
        })
      }
    
      else {
        createDepartment(department)
        .then(
          response => { 
            console.log(response.data) 
            navigate('/departments')
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
    deptName: '',
    deptDescription: '',
  });

  function validateForm() {
    let formIsValid = true;
    let errors = {};

    if (!deptName) {
      formIsValid = false;
      errors["deptName"] = "*Please enter Department name.";
    }

    if (!deptDescription) {
      formIsValid = false;
      errors["deptDescription"] = "*Please enter Department deptDescription.";
    }

    setErrors(errors);
    return formIsValid;
  }

  function pageTitle() {
    if(deptId) return <h2 className='text-center'>Update department</h2>
    else return <h2 className='text-center'>Add department</h2>
  }

  useEffect(() => {
    if(deptId) {
      getDepartment(deptId)
      .then(
        response => {
          let department = response.data
          setDeptName(department.deptName)
          setDeptDescription(department.deptDescription)
        }
      )
      .catch(
        error => {
          console.error(error)
        }
      )
    }
  }, [deptId])

  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form onSubmit={saveOrupdateDepartment}>
              <div className='form-group'>
                <label className='form-label'>Department Name:
                  <input 
                    type='text' 
                    placeholder='Enter Department Name' 
                    name='deptName' 
                    className={`form-control ${errors.deptName ? 'is-invalid' : ''}`}
                    value={deptName} 
                    onChange={handleDeptName} 
                  />
                  {errors.deptName && <div className='invalid-feedback'>{errors.deptName}</div>}
                </label>
              </div>
              <div className='form-group'>
                <label className='form-label'>Department deptDescription:
                  <input
                    type='text'
                    placeholder='Enter Department Description'
                    name='deptDescription' 
                    className={`form-control ${errors.deptDescription ? 'is-invalid' : ''}`}
                    value={deptDescription} 
                    onChange={handleDeptDescription}
                  />
                  {errors.deptDescription && <div className='invalid-feedback'>{errors.deptDescription}</div>}
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

export default DepartmentComponent;