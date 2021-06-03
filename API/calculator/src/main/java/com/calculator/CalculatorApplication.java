package com.calculator;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calculator.model.Shares;
import com.calculator.repository.RepoShares;


@EnableAutoConfiguration
@RestController
@SpringBootApplication
public class CalculatorApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbc_con;
	
	@RequestMapping("/shares")
	List<Shares> shareDetails() 
	{
		RepoShares tmp = new RepoShares();
		return  tmp.findAll();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CalculatorApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//-->use this to test that you can connect to db and write
		//jdbc_con.update("insert into share (share_num) values(?)",1);
	}

}
