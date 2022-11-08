package com.wellsfargo.bankmanagement.service;

import com.wellsfargo.bankmanagement.dao.BranchRepository;
import com.wellsfargo.bankmanagement.model.Branch;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BranchService {
    private final BranchRepository branchRepository;

    public Branch createBranch(Branch branch) {
        return branchRepository.saveAndFlush(branch);
    }

    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }

    public boolean deleteBranch(String branchId) {
        Optional<Branch> branchOptional = branchRepository.findById(branchId);
        if(branchOptional.isPresent()) {
            branchRepository.deleteById(branchId);
            return true;
        }
        return false;
    }
}
