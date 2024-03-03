package com.app.service;

import java.util.List;

import org.springframework.mail.MailException;

import com.app.pojos.Contact;

public interface IContactService {

	public String addFeedback(Contact contact) throws MailException, InterruptedException;

	public List<Contact> getAllFeedback();
}
