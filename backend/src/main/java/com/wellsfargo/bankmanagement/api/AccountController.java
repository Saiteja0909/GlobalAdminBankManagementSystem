package com.wellsfargo.bankmanagement.api;

import com.wellsfargo.bankmanagement.model.Account;
import com.wellsfargo.bankmanagement.records.AccountRecord;
import com.wellsfargo.bankmanagement.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts")
@AllArgsConstructor
public class AccountController {
    private final AccountService accountService;

    @PostMapping
    public ResponseEntity createAccount(@RequestBody AccountRecord accountRecord) {
        boolean isAccountCreated = accountService.createAccount(accountRecord);
        if (!isAccountCreated) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{error: invalid account details}");
        }
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .build();
    }

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @DeleteMapping(path = "{account-number}")
    public ResponseEntity deleteAccount(@RequestParam("account-number") String accountNo) {
        boolean isBranchDeleted = accountService.deleteAccount(accountNo);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(String.format("{error: unable to delete the account " +
                                "with account number {}\nreason: check " +
                                "whether branch exists with id " +
                                "{}",
                        accountNo, accountNo));
    }

}
