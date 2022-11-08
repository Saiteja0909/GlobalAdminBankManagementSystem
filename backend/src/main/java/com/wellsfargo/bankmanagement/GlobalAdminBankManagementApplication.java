package com.wellsfargo.bankmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication public class GlobalAdminBankManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(GlobalAdminBankManagementApplication.class, args);
    }

//    @Bean PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    // todo: us-01b Admin login - POST req body {username, password}
    // todo: link both branch and account tables
}
