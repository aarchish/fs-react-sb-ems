package com.jstech.ems_backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long deptId;

    @Column(name = "deptartment_name")
    private String deptName;

    @Column(name = "deptartment_description")
    private String deptDescription;

    public Department(String it, String informationTechnology) {
        this.deptName = it;
        this.deptDescription = informationTechnology;
    }
}
