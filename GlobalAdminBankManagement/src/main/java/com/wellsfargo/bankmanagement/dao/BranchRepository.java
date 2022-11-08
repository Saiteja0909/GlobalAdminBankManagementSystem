package com.wellsfargo.bankmanagement.dao;

import com.wellsfargo.bankmanagement.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch, String> {}
