package com.codecool.life_sync.endpoint;

import com.codecool.life_sync.security.dto.RegisterRequest;
import com.codecool.life_sync.service.security_service.AuthenticationService;
import com.codecool.life_sync.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authentication")
@RequiredArgsConstructor
public class AuthenticationEndpoint {

    private final AuthenticationService service;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return service.register(request);
    }

    @PostMapping("/login")
    public String login(Authentication authentication) {
        return service.login(authentication);
    }

}
