package com.app.service;

import java.util.Optional;

import org.springframework.mail.MailException;

import com.app.pojos.LearningLicense;
import com.app.pojos.PermanentLicense;

public interface IPermanentService {

	//for saving PL object
	String applyForPermanent(PermanentLicense pl) throws MailException, InterruptedException;
	
	////for finding PL object associated with the user using userId
	PermanentLicense registerForPermanent(PermanentLicense pl, Integer userId) throws MailException, InterruptedException;

	//method to find PL obj by applicationId
	//Every Java Programmer is familiar with NullPointerException. 
	//It can crash your code. And it is very hard to avoid it without using too many null checks. So, to overcome this, Java 8 has introduced a new class Optional in java.util package. It can help in writing a neat code without using too many null checks.
	Optional<PermanentLicense> findById(Integer applicantId);
	
	//method to find PL obj by userId
	PermanentLicense findByUserId(Integer userId);
	
	//method to find PL obj by userId
	PermanentLicense findByUserEmail(String email);
	
	//method to delete PL obj
	void deletePermanentLicenseById(Integer applicantId);

	//method for updating PL obj
	boolean updateLisence(PermanentLicense pl);
	
}
