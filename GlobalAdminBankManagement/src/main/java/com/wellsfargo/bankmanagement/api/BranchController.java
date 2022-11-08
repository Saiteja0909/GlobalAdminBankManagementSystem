package com.wellsfargo.bankmanagement.api;

import com.wellsfargo.bankmanagement.model.Branch;
import com.wellsfargo.bankmanagement.service.BranchService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/branches")
@AllArgsConstructor
public class BranchController {
    private final BranchService branchService;

    @PostMapping
    public ResponseEntity createBranch(@RequestBody Branch branch) {
        Branch newBranch = branchService.createBranch(branch);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(newBranch);
    }

    @GetMapping
    public List<Branch> getAllBranches() {
        return branchService.getAllBranches();
    }

    @DeleteMapping("{branch-id}")
    public ResponseEntity deleteBranch(@RequestParam("branch-id") String branchId) {
        boolean isBranchDeleted = branchService.deleteBranch(branchId);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(String.format("{error: unable to delete branch with " +
                        "id {}\nreason: check whether branch exists with id {}",
                        branchId, branchId));
    }
}
