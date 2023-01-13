package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.security.dto.LoginRequest;
import com.codecool.life_sync.security.dto.RegisterRequest;
import com.codecool.life_sync.service.security_service.AuthenticationService;
import com.codecool.life_sync.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/authentication")
@RequiredArgsConstructor
public class AuthenticationEndpoint {

    private final AuthenticationService service;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        System.out.println("------- Arrived at the REGISTRATION ENDPOINT");
        return service.register(request);
    }

    @PostMapping("/login")
    public String login(Authentication authentication) {
        System.out.println("------- Arrived at the LOGIN ENDPOINT");
        return service.login(authentication);
    }

}
