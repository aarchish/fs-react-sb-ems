import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employee" element={<EmployeeComponent />} />
        <Route path="/update-employee/:empId" element={<EmployeeComponent />} />
        <Route path='/delete-employee/:empId' element={<EmployeeComponent />} />

        <Route path="/departments" element={<ListDepartmentComponent />} />
        <Route path="/add-department" element={<DepartmentComponent />} />
        <Route path="/update-department/:deptId" element={<DepartmentComponent />} />
        <Route path='/delete-department/:deptId' element={<DepartmentComponent />} />

      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
