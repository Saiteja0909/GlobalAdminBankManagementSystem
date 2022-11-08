package com.wellsfargo.bankmanagement.service;

import com.wellsfargo.bankmanagement.dao.AccountRepository;
import com.wellsfargo.bankmanagement.model.Account;
import com.wellsfargo.bankmanagement.records.AccountRecord;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public boolean createAccount(AccountRecord accountRecord) {
        Account newAccount = accountRepository.saveAndFlush(Account.builder()
                        .accountNo(accountRecord.account_number())
                        .customerNo(accountRecord.customer_number())
                        .branchId(accountRecord.branch_id())
                        .balance(accountRecord.balance())
                        .openingDate(Date.from(Instant.now()))
                        .type(Account.AccountType.valueOf(accountRecord.account_type()))
                        .build()) ;
        if(newAccount==null) {
            return false;
        }
        return true;
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public boolean deleteAccount(String accountNo) {
        Optional<Account> accountOptional =
                accountRepository.findById(accountNo);
        if (accountOptional.isPresent()) {
            accountRepository.deleteById(accountNo);
            return true;
        }
        return false;
    }
}
