package com.wellsfargo.bankmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
@Table(name = "Account")
public class Account {
    @Id
    private String accountNo;
    // todo: link customer table to account table (customer id -> customer No)
    private String customerNo;
    // todo: link branch table to account table (branch id -> branch id)
    private String branchId;
    private Long balance;
    private Date openingDate;
    private String type;
    private String status;

    /*public enum AccountType {
        SAVING("savings"),
        CURRENT("current");
        private final String value;

        AccountType(String value) {
            this.value = value;
        }
    }

    public enum AccountStatus {
        ACTIVE("active"),
        INACTIVE("inactive");
        private final String value;
        AccountStatus(String value) {
            this.value = value;
        }
    }*/
}