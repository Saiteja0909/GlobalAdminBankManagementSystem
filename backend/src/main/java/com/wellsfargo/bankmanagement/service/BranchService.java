package com.wellsfargo.bankmanagement.service;

import com.wellsfargo.bankmanagement.dao.BranchRepository;
import com.wellsfargo.bankmanagement.model.Branch;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BranchService {
    @Autowired
    private final BranchRepository branchRepository;

    public Branch createBranch(Branch branch) {
        return branchRepository.saveAndFlush(branch);
    }

    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }
    public List<String> getAllBranchIds(){
        List<String> bId = new ArrayList<>();
        List<Branch> b = branchRepository.findAll();
        for(Branch br : b){
            bId.add(br.getBranchId());
        }
        return bId;
    }
    public boolean deleteBranch(String branchId) {
        if(branchRepository.findById(branchId) == null)
        return false;
        branchRepository.deleteById(branchId);
        return true;
    }
}
