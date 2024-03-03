package com.app.service;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.RtoOfficer;

public interface IRtoOfficerService {

	public RtoOfficer findRtoDetails(String email);
	
	public String registerRto(RtoOfficer officer) throws InterruptedException;

	public List<RtoOfficer> getAllOfficers();
}
