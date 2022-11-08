package com.wellsfargo.bankmanagement.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    private Long id;
}
