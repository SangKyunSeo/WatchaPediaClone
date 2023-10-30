package com.boot.security;

import jakarta.servlet.DispatcherType;
import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;
//import java.util.stream.Collectors;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

//    private final CustomUserDetailsService service;
    private final JwtAuthenticationFilter filter;
//    private final JwtTokenProvider provide;
    private final AuthSuccessHandler authSuccessHandler;
//    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtExceptionFilter jwtExceptionFilter;
    private final WebConfig webConfig;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/css/**","/js/**","/img/**",
                "/assets/**","/movieimg/**","/tvimg/**","/personimg/**",
                "/favicon.ico","/main","/registerForm","/api/register","/","/api/login/**","/index.html");
    }
    //Cors 설정
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOrigin("*");
        configuration.addAllowedHeader("*");
        configuration.addAllowedMethod("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        // 기본 설정
        http.httpBasic(AbstractHttpConfigurer::disable);
        http.csrf(AbstractHttpConfigurer::disable);
        http.cors(AbstractHttpConfigurer::disable);
//        http.cors(c -> {
//            CorsConfigurationSource source = request -> {
//                CorsConfiguration config = new CorsConfiguration();
//                config.setAllowedOrigins(List.of("*"));
//                config.setAllowedMethods(List.of("*"));
//                return config;
//            };
//            c.configurationSource(source);
//        });

        // 권한이 필요한 대상
        http.authorizeHttpRequests(authz -> authz
                .dispatcherTypeMatchers(DispatcherType.FORWARD).permitAll()
                .requestMatchers("/main","/registerForm","/api/register","/loginForm",
                        "/",/*"/login",*/"/api/mainMovie","/api/getMovieInfo",
                        "/movie","/tv","/api/tvDetail/{tv_num}","/api/tvList","/api/tvDetail","/api/movieDetail","/api/movieDetail/{movie_num}",
                        "/api/getMovieGenre","/api/getTvGenre","/api/getMovieCast",
                        "/personDetail/{person_num}","/api/getReviewList/**","/api/getReviewAvgScore/**","/api/personDetail/**","/api/getPersonDetail",
                        "/api/getPersonMovieList","/api/getPersonTvList","/api/getTvCast/**",
                        "/api/getFavTotal","/api/getReviewPreview").permitAll().anyRequest().authenticated());

        // 세션을 사용하지 않음
        http.sessionManagement((configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)));

        // JWT 필터를 사용
        http.addFilter(webConfig.corsFilter());
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        http.addFilterBefore(jwtExceptionFilter, JwtAuthenticationFilter.class);
        // JWT 예외 처리
//        http.exceptionHandling((exception) -> exception
//                .authenticationEntryPoint(jwtAuthenticationEntryPoint));

        // 사용자 로그인 행동에 대한 정의
        http.formLogin((formLogin -> formLogin
                .loginPage("/loginForm")
                .loginProcessingUrl("/api/login")
                .usernameParameter("username")
                .passwordParameter("password")
//                .defaultSuccessUrl("/main")
                .successHandler(authSuccessHandler)
                .permitAll()));

        http.logout((logout) -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/main")
                .invalidateHttpSession(true));
        return http.build();
    }
}
