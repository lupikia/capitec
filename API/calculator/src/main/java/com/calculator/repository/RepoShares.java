package com.calculator.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.calculator.model.Shares;

import java.util.ArrayList;
import java.util.List;

@ComponentScan
@Repository
public class RepoShares implements RepoSharesInterface {
	
	@Autowired
	private JdbcTemplate jdbc_con;
	
	
	@Override
    public List<Shares> findAll() {
		
		
	        return jdbc_con.query(
	                "select * from share",
	                (rs, rowNum) ->
	                        new Shares(
	                        		rs.getInt("share_num") ,
	                        		rs.getFloat("price"),
	                        		rs.getFloat("num_commission")
	                        		)
	                        );
	}

}
