package com.wellsfargo.bankmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellsfargo.bankmanagement.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{

}
