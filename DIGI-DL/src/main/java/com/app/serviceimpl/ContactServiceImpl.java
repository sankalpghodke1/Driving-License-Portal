package com.app.serviceimpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import com.app.pojos.Contact;
import com.app.repository.ContactRepository;
import com.app.service.IContactService;
import com.app.service.IEmailSenderService;

@Service
@Transactional
public class ContactServiceImpl implements IContactService {

	@Autowired
	private ContactRepository contRepo;
	
	@Autowired
	private IEmailSenderService emailSenderService;
	
	
	@Override
	public String addFeedback(Contact contact) throws MailException, InterruptedException {
		if(contRepo.save(contact) != null) {
			emailSenderService.sendSimpleEmail(contact.getEmail(), 
					"Dear " + contact.getName() + ",\n" +"Your response / feedback has been successfully recorded on the DIGI-DL Portal.\n"
			+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services", "DIGI-DL Feedback");
			return "Feedback added Successfully!!";
		}
		return "Feedback Failed!!";
	}

	@Override
	public List<Contact> getAllFeedback() {
		// TODO Auto-generated method stub
		return contRepo.findAll();
	}

}
