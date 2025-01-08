package com.jstech.ems_backend.service;

import com.jstech.ems_backend.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {

    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long id);

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(Long id, DepartmentDto departmentDto);

    DepartmentDto deleteDepartment(Long id);
}
