package com.jstech.ems_backend.repository;

import com.jstech.ems_backend.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    public Employee findByEmail(String email);
}
