package com.jstech.ems_backend.mapper;

import com.jstech.ems_backend.dto.DepartmentDto;
import com.jstech.ems_backend.entities.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department) {
        DepartmentDto departmentDto = new DepartmentDto();
        departmentDto.setDeptId(department.getDeptId());
        departmentDto.setDeptName(department.getDeptName());
        departmentDto.setDeptDescription(department.getDeptDescription());
        return departmentDto;
    }

    public static Department mapToDepartment(DepartmentDto departmentDto) {
        Department department = new Department();
        department.setDeptId(departmentDto.getDeptId());
        department.setDeptName(departmentDto.getDeptName());
        department.setDeptDescription(departmentDto.getDeptDescription());
        return department;
    }
}
