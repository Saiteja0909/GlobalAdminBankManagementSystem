package com.wellsfargo.bankmanagement.api;

import com.wellsfargo.bankmanagement.model.Account;
//import com.wellsfargo.bankmanagement.records.AccountRecord;
import com.wellsfargo.bankmanagement.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/accounts")
@AllArgsConstructor
public class AccountController {
    @Autowired
    private final AccountService accountService;

    @PostMapping
    public boolean createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @DeleteMapping("/{accountNo}")
    public boolean  deleteAccount(@PathVariable String accountNo) {
        boolean isBranchDeleted = accountService.deleteAccount(accountNo);
        return isBranchDeleted;
    }

}
