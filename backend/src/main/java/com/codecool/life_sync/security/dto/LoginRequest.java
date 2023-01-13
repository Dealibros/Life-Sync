package com.codecool.life_sync.security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import javax.security.auth.Subject;
import java.util.Collection;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest{
    private String username;
    private String password;

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }
//
//    @Override
//    public Object getCredentials() {
//        return null;
//    }
//
//    @Override
//    public Object getDetails() {
//        return null;
//    }
//
//    @Override
//    public Object getPrincipal() {
//        return null;
//    }
//
//    @Override
//    public boolean isAuthenticated() {
//        return false;
//    }
//
//    @Override
//    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
//
//    }
//
//    @Override
//    public String getName() {
//        return null;
//    }
//
//    @Override
//    public boolean implies(Subject subject) {
//        return Authentication.super.implies(subject);
//    }
}
