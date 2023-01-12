package com.codecool.life_sync.security.config;

import com.codecool.life_sync.entity.user.UserRepository;
import com.codecool.life_sync.service.security_service.RsaKeyProperties;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableConfigurationProperties(RsaKeyProperties.class)
public class SecurityConfiguration {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.cors().and().csrf().disable().authorizeHttpRequests(auth -> auth.anyRequest().authenticated()).oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt).sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)).httpBasic(Customizer.withDefaults()).build();
    }


    @Bean
    public UserDetailsService userDetailsService(UserRepository userRepository) {
        return username -> userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


    @Bean
    JwtDecoder jwtDecoder(RsaKeyProperties properties) {
        return NimbusJwtDecoder.withPublicKey(properties.publicKey()).build();
    }

    @Bean
    JwtEncoder jwtEncoder(RsaKeyProperties properties) {
        JWK jwk = new RSAKey.Builder(properties.publicKey()).privateKey(properties.privateKey()).build();
        JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwkSource);
    }

    /*
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors().and().csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/").hasAnyRole()
                .requestMatchers("/calendarPage").hasRole("USER")
                .anyRequest()
                .authenticated()
                .and()
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .httpBasic(Customizer.withDefaults())
                .build();
    }*/


    /*
    @Bean
    UserDetailsManager userDetailsManager(PasswordEncoder passwordEncoder) {
        String password = passwordEncoder.encode("123");
        UserDetails user = User.withUsername("user").password(password).authorities("read").build();
        return new InMemoryUserDetailsManager(user);
    }
*/
}
