package com.wellsfargo.bankmanagement.dao;

import com.wellsfargo.bankmanagement.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {}
