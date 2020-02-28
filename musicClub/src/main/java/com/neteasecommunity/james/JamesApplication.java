package com.neteasecommunity.james;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//注入扫描包,需要引入tkmybatis
@MapperScan(basePackages = {"com.neteasecommunity.james.mapper"})
public class JamesApplication {

    public static void main(String[] args) {
        SpringApplication.run(JamesApplication.class, args);
    }

}
