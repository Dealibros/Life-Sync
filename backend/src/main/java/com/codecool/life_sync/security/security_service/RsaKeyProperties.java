package com.codecool.life_sync.security.security_service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;


@Configuration
@ConfigurationProperties("rsa")
public class RsaKeyProperties {

    private RSAPrivateKey privateKey;
    private RSAPublicKey publicKey;

    @Bean
    RSAPrivateKey privateKey() {
        return privateKey;
    }

    @Bean
    RSAPublicKey publicKey() {
        return publicKey;
    }

    public RSAPrivateKey getPrivateKey() {
        return privateKey;
    }

    public RSAPublicKey getPublicKey() {
        return publicKey;
    }

    public void setPrivateKey(RSAPrivateKey privateKey) {
        this.privateKey = privateKey;
    }

    public void setPublicKey(RSAPublicKey publicKey) {
        this.publicKey = publicKey;
    }
}
