package com.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class PediaApplication {

    public static void main(String[] args) {
        SpringApplication.run(PediaApplication.class, args);
    }

}
