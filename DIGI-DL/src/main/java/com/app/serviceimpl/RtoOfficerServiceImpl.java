package com.app.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.pojos.Role;
import com.app.pojos.RtoOfficer;
import com.app.repository.RtoOfficerRepository;
import com.app.service.IRtoOfficerService;

@Service
@Transactional
@CrossOrigin
public class RtoOfficerServiceImpl implements IRtoOfficerService {

	@Autowired
	private RtoOfficerRepository rtoRepo;
	
	public RtoOfficer findRtoDetails(String email) {
		// TODO Auto-generated method stub
		return rtoRepo.findByEmail(email);
	}

	@Override
	public String registerRto(RtoOfficer officer) throws InterruptedException {
		String email = officer.getEmail();
		RtoOfficer newRto = rtoRepo.findByEmail(email);
		if(newRto != null) {
			return "Email already Registered!!";
		}
		officer.setRole(Role.RTOOFFICER);
		if(rtoRepo.save(officer) !=null) {
			return "Registered Successfully!!";
		}
		return "Not Registered!!";
	}

	@Override
	public List<RtoOfficer> getAllOfficers() {
		// TODO Auto-generated method stub
		return rtoRepo.findAll();
	}

}
