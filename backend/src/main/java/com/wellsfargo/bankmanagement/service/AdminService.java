package com.wellsfargo.bankmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.bankmanagement.dao.AdminRepository;
import com.wellsfargo.bankmanagement.model.Admin;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminService{
    @Autowired
    private final AdminRepository adminRepository;
    public boolean checkCredentials(Admin admin){
        Admin actual = adminRepository.getReferenceById(admin.getUsername());
        if(actual == null || !admin.getPassword().equals(actual.getPassword()))
        return false;
        return true;

        
    }
    
}
