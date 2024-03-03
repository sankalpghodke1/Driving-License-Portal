package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exception.UserHandlingException;
import com.app.pojos.Contact;
import com.app.service.IContactService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/contact")
public class ContactController {
	
	@Autowired
	private IContactService contService;
	
	@PostMapping("/addFeedback")
	public ResponseEntity<?> contact(@RequestBody Contact contact){
		try {
			return ResponseEntity.ok().body(contService.addFeedback(contact));
		}catch(Exception e) {
			throw new UserHandlingException(e.getMessage());
		}
	}
}
