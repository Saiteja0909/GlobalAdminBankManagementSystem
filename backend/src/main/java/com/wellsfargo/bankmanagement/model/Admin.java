package com.wellsfargo.bankmanagement.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Admin {
    @Id
    private String username;
    private String password;
}
