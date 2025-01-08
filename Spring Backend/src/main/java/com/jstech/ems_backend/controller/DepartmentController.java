package com.jstech.ems_backend.controller;

import com.jstech.ems_backend.dto.DepartmentDto;
import com.jstech.ems_backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService departmentService;

    // build Add department REST API
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto) {
        DepartmentDto newDepartmentDto = departmentService.createDepartment(departmentDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newDepartmentDto);
    }

    // build Get department By ID REST API
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable Long id) {
        DepartmentDto departmentDto = departmentService.getDepartmentById(id);
        return ResponseEntity.ok(departmentDto);
    }

    // build Get All departments REST API
    @GetMapping()
    public ResponseEntity<?> getAllDepartments() {
        return ResponseEntity.ok(departmentService.getAllDepartments());
    }

    // build Update department REST API
    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable Long id, @RequestBody DepartmentDto departmentDto) {
        DepartmentDto updatedDepartmentDto = departmentService.updateDepartment(id, departmentDto);
        return ResponseEntity.ok(updatedDepartmentDto);
    }

    // build Delete department REST API
    @DeleteMapping("/{id}")
    public ResponseEntity<DepartmentDto> deleteDepartment(@PathVariable Long id) {
        DepartmentDto deletedDepartmentDto = departmentService.deleteDepartment(id);
        return ResponseEntity.ok(deletedDepartmentDto);
    }
}
