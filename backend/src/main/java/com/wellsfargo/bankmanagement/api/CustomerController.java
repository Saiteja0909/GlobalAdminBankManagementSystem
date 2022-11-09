package com.wellsfargo.bankmanagement.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wellsfargo.bankmanagement.model.Customer;
import com.wellsfargo.bankmanagement.service.BranchService;
import com.wellsfargo.bankmanagement.service.CustomerService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1/customers")
@AllArgsConstructor
public class CustomerController {
    @Autowired
    private final CustomerService customerService;
    @Autowired
    private final BranchService branchService;
    @PostMapping("/addnew")
    public Customer createCustomer(@RequestBody Customer customer){
        return customerService.createNew(customer);
    }
    @GetMapping("/all")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }
    @DeleteMapping("/{customerNo}")
    public boolean deletebyId(@PathVariable String customerNo){
        return customerService.deleteCustomer(customerNo);
    }

    
}
