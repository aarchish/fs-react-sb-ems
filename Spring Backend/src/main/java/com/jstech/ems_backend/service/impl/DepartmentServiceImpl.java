package com.jstech.ems_backend.service.impl;

import com.jstech.ems_backend.dto.DepartmentDto;
import com.jstech.ems_backend.entities.Department;
import com.jstech.ems_backend.exceptions.ResourceNotFoundException;
import com.jstech.ems_backend.mapper.DepartmentMapper;
import com.jstech.ems_backend.repository.DepartmentRepository;
import com.jstech.ems_backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    public DepartmentDto getDepartmentById(Long id) {
        Department department = departmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map(DepartmentMapper::mapToDepartmentDto).collect(Collectors.toList());
    }

    public DepartmentDto updateDepartment(Long id, DepartmentDto departmentDto) {
        Department department = departmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
        department.setDeptName(departmentDto.getDeptName());
        department.setDeptDescription(departmentDto.getDeptDescription());
        Department updatedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updatedDepartment);
    }

    public DepartmentDto deleteDepartment(Long id) {
        Department department = departmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
        departmentRepository.delete(department);
        return DepartmentMapper.mapToDepartmentDto(department);
    }
}
