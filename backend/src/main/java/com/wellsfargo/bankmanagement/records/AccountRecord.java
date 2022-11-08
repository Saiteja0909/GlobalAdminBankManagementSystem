package com.wellsfargo.bankmanagement.records;

public record AccountRecord(
        String account_number,
        Long customer_number,
        String branch_id,
        Long balance,
        String account_type
) {}