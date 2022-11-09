package com.wellsfargo.bankmanagement.service;

import com.wellsfargo.bankmanagement.dao.AccountRepository;
import com.wellsfargo.bankmanagement.dao.BranchRepository;
import com.wellsfargo.bankmanagement.dao.CustomerRepository;
import com.wellsfargo.bankmanagement.model.Account;
//import com.wellsfargo.bankmanagement.records.AccountRecord;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {
    @Autowired
    private final AccountRepository accountRepository;
    @Autowired
    private final CustomerRepository customerRepository;
    @Autowired
    private final BranchRepository branchRepository;

    public boolean createAccount(Account account) {
        // 
        /*if(customerRepository.findById(account.getCustomerNo())!=null)
        return false;
        if(branchRepository.findById(account.getBranchId())!=null)
        return false;
        if(account.getBalance()<5000)
        return false;*/
         accountRepository.save(account);
        /*if(newAccount==null) {
            return false;
        }*/
        return true;
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public boolean deleteAccount(String accountNo) {
        if(accountRepository.findById(accountNo) == null)
        return false;
        accountRepository.deleteById(accountNo);
        return true;
}}
