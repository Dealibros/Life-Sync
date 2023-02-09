package com.codecool.life_sync.service;

import com.codecool.life_sync.entity.user.User;
import com.codecool.life_sync.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username) {
        return userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("This user doesn't exist!"));
    }

    //use getPrincipal and cast it
    public User getAuthenticatedUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(auth.getName()).orElseThrow(() -> new UsernameNotFoundException("No user is logged in."));
        return user;
    }
}
