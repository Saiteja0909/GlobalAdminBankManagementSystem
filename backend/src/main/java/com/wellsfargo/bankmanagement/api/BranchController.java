package com.wellsfargo.bankmanagement.api;

import com.wellsfargo.bankmanagement.model.Branch;
import com.wellsfargo.bankmanagement.service.BranchService;
import org.springframework.web.bind.annotation.CrossOrigin;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1/branches")
@AllArgsConstructor
public class BranchController {
    @Autowired
    private final BranchService branchService;

    @PostMapping
    public Branch createBranch(@RequestBody Branch branch) {
    return branchService.createBranch(branch);
        
    }
  

    @GetMapping
    public List<Branch> getAllBranches() {
        return branchService.getAllBranches();
    }

    @GetMapping("/branchId")
    public List<String> getAllBranchIds() {
        return branchService.getAllBranchIds();
    }

    @DeleteMapping("{branchId}")
    public boolean deleteBranch(@PathVariable String branchId) {
        boolean isBranchDeleted = branchService.deleteBranch(branchId);
        return isBranchDeleted;
    }
}
