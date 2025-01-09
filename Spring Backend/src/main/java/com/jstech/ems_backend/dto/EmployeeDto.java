package com.jstech.ems_backend.dto;

import com.jstech.ems_backend.entities.Department;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long empId;
    private String firstName;
    private String lastName;
    private String email;
    private Department department;
}
