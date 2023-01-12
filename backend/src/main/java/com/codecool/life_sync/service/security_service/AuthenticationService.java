package com.codecool.life_sync.service.security_service;

import com.codecool.life_sync.security.dto.RegisterRequest;
import com.codecool.life_sync.entity.user.Role;
import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.entity.user.UserRepository;
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
        System.out.println("user = " + user);
        return repository.save(user);
       /* var jtwToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jtwToken)
                .build();*/
    }

    //refactor these methods, more dynamic

    public String login(Authentication request) {
        return jwtService.generateToken(request);

       /* authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User or password incorrect"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();*/
    }
}
