package com.wellsfargo.bankmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
public class Branch {
    @Id
    private String branchId;
    private String branchName;
    private String branchAddress;
}
