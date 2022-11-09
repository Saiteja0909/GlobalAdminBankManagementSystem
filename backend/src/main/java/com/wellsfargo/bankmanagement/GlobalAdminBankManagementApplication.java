package com.wellsfargo.bankmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class }) 
public class GlobalAdminBankManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(GlobalAdminBankManagementApplication.class, args);
    }

    @Bean PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // todo: us-01b Admin login - POST req body {username, password}
    // todo: link both branch and account tables
}
