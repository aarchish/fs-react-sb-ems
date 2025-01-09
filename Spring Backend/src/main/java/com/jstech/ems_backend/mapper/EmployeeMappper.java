package com.jstech.ems_backend.mapper;

import com.jstech.ems_backend.dto.EmployeeDto;
import com.jstech.ems_backend.entities.Department;
import com.jstech.ems_backend.entities.Employee;

public class EmployeeMappper {

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setEmpId(employee.getEmpId());
        employeeDto.setFirstName(employee.getFirstName());
        employeeDto.setLastName(employee.getLastName());
        employeeDto.setEmail(employee.getEmail());
        employeeDto.setDepartment(employee.getDepartment());
        return employeeDto;
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setEmpId(employeeDto.getEmpId());
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        Department department = (employee.getDepartment() != null) ? employee.getDepartment() : new Department();
        employee.setDepartment(department);
        return employee;
    }
}
