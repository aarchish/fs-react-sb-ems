import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'

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
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
