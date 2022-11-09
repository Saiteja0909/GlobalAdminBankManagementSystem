package com.wellsfargo.bankmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.bankmanagement.dao.CustomerRepository;
import com.wellsfargo.bankmanagement.model.Customer;

import java.util.List;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomerService {
    @Autowired
    private final CustomerRepository customerRepository;
    public Customer createNew(Customer customer){
        //if(customerRepository.findById(customer.getCustomerNo()) == null)
        return customerRepository.save(customer);
        //return null;
        
    }
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
        
    }
    public boolean deleteCustomer(String customerNo){
        if(customerRepository.findById(customerNo) == null)
        return false;
        customerRepository.deleteById(customerNo);
        return true;
    }
}
