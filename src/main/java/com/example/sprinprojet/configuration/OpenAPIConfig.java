package com.example.sprinprojet.configuration;

import io.swagger.v3.oas.models.OpenAPI;


import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI openApiInformation(){
        Contact contact =new Contact().email("talbi.ghofrane@esprittn").name("ghofrane talbi");
        Info info =new Info().contact(contact).description("")
                .summary("Manage application")
                .title("study").version("1.0.0")
                .license(new License().name("Apache 2.0").url("http://springdoc.org"));
        return new OpenAPI().info(info);
    }
}
