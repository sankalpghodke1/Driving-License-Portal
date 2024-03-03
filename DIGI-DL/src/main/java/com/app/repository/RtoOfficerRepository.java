package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.RtoOfficer;

@Repository
public interface RtoOfficerRepository extends JpaRepository<RtoOfficer, Integer> {

	RtoOfficer findByEmail(String email);

}
