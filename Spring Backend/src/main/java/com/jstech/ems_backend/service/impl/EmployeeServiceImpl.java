package com.jstech.ems_backend.service.impl;

import com.jstech.ems_backend.dto.EmployeeDto;
import com.jstech.ems_backend.entities.Department;
import com.jstech.ems_backend.entities.Employee;
import com.jstech.ems_backend.exceptions.ResourceNotFoundException;
import com.jstech.ems_backend.mapper.EmployeeMappper;
import com.jstech.ems_backend.repository.DepartmentRepository;
import com.jstech.ems_backend.repository.EmployeeRepository;
import com.jstech.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;

    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMappper.mapToEmployee(employeeDto);

        Department department = departmentRepository.findById(employeeDto.getDepartment().getDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + employeeDto.getDepartment().getDeptId()));

        employee.setDepartment(department);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMappper.mapToEmployeeDto(savedEmployee);
    }

    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        return EmployeeMappper.mapToEmployeeDto(employee);
    }

    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeMappper::mapToEmployeeDto).collect(Collectors.toList());
    }

    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());

        Department department = departmentRepository.findById(employeeDto.getDepartment().getDeptId())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + employeeDto.getDepartment().getDeptId()));

        employee.setDepartment(department);
        Employee updatedEmployee = employeeRepository.save(employee);

        return EmployeeMappper.mapToEmployeeDto(updatedEmployee);
    }

    public EmployeeDto deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
        employeeRepository.delete(employee);
        return EmployeeMappper.mapToEmployeeDto(employee);
    }
}
