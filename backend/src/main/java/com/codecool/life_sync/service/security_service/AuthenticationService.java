package com.codecool.life_sync.service.security_service;

import com.codecool.life_sync.security.dto.RegisterRequest;
import com.codecool.life_sync.entity.user.Role;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public User register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        return repository.save(user);
    }

    public String login(Authentication authentication) {
        return jwtService.generateToken(authentication);
    }

}
