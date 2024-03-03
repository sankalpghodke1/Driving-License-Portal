package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exception.UserHandlingException;
import com.app.dto.ResponseDTO;
import com.app.pojos.Contact;
import com.app.pojos.RtoOfficer;
import com.app.pojos.User;
import com.app.repository.ContactRepository;
import com.app.repository.RtoOfficerRepository;
import com.app.repository.UserRepository;
import com.app.service.IRtoOfficerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RtoOfficerRepository rtoRepo;
	
	@Autowired
	private IRtoOfficerService rtoService;
	
	@Autowired
	private ContactRepository contRepo;
	
	@GetMapping("/userList")
	public ResponseDTO<?> getAllUsers(){
		List<User> users = userRepo.findAll();
		return new ResponseDTO(HttpStatus.OK, "Successfully collected all users", users);
	}
	
	@GetMapping("/officerList")
	public ResponseDTO<?> getAllOfficers(){
		List<RtoOfficer> officer = rtoRepo.findAll();
		return new ResponseDTO(HttpStatus.OK, "Successfully collected all users", officer);
	}
	
	@PostMapping("/registerOfficer")
	public ResponseEntity<?> registerRto(@RequestBody RtoOfficer rtoOfficer){
		try {
			System.err.println("Rto Officer = "+ rtoOfficer);
			return ResponseEntity.ok().body(rtoService.registerRto(rtoOfficer));
		}catch (Exception e) {
			throw new UserHandlingException(e.getMessage());
		}
	}
	
	@GetMapping("/getFeedback")
	public ResponseDTO<?> getAllFeedback(){
		List<Contact> feedback = contRepo.findAll();
		return new ResponseDTO(HttpStatus.OK, "Successfully collected all users", feedback);
	}
	
}
