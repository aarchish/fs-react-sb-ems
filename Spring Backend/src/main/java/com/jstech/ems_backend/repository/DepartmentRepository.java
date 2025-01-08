package com.jstech.ems_backend.repository;

import com.jstech.ems_backend.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
