package com.boot.security;

import jakarta.servlet.DispatcherType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;
import java.util.stream.Collectors;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {

    private final CustomUserDetailsService service;
    private final JwtAuthenticationFilter filter;
    private final JwtTokenProvider provide;
    private final AuthSuccessHandler authSuccessHandler;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtExceptionFilter jwtExceptionFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/css/**","/js/**","/img/**",
                "/assets/**","/movieimg/**","/tvimg/**","/personimg/**",
                "/favicon.ico","/main","/registerForm","/register","/","/login","/index.html");
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        // 기본 설정
        http.httpBasic(AbstractHttpConfigurer::disable);
        http.csrf(AbstractHttpConfigurer::disable);
        http.cors(c -> {
            CorsConfigurationSource source = request -> {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOrigins(List.of("*"));
                config.setAllowedMethods(List.of("*"));
                return config;
            };
            c.configurationSource(source);
        });

        // 권한이 필요한 대상
        http.authorizeHttpRequests(authz -> authz
                .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                .requestMatchers("/main","/registerForm","/register","/loginForm",
                        "/","/login","/mainMovie","/getMovieInfo",
                        "/movie","/tv","/tvDetail/{tv_num}","/tvList","/tvDetail","/movieDetail","/movieDetail/{movie_num}",
                        "/getMovieGenre","/getTvGenre","/getMovieCast",
                        "/personDetail/{person_num}").permitAll().anyRequest().authenticated());

        // 세션을 사용하지 않음
        http.sessionManagement((configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)));

        // JWT 필터를 사용
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        http.addFilterBefore(jwtExceptionFilter, JwtAuthenticationFilter.class);
        // JWT 예외 처리
//        http.exceptionHandling((exception) -> exception
//                .authenticationEntryPoint(jwtAuthenticationEntryPoint));

        // 사용자 로그인 행동에 대한 정의
        http.formLogin((formLogin -> formLogin
                .loginPage("/loginForm")
                .loginProcessingUrl("/login")
                .usernameParameter("username")
                .passwordParameter("password")
//                .defaultSuccessUrl("/main")
                .successHandler(authSuccessHandler)
                .failureUrl("/loginError")
                .permitAll()));

        http.logout((logout) -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/main")
                .invalidateHttpSession(true));
        return http.build();
    }
}
