package com.wellsfargo.bankmanagement.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.bankmanagement.model.Admin;
import com.wellsfargo.bankmanagement.service.AdminService;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
public class AdminController {
    @Autowired
    private final AdminService adminService;

    @PostMapping
    public boolean checkCredentials(@RequestBody Admin admin){
        return adminService.checkCredentials(admin);
    }
}
