package com.app.serviceimpl;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repository.UserRepository;
import com.app.service.IEmailSenderService;
import com.app.service.IUserService;
@Service
@Transactional
@CrossOrigin
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private IEmailSenderService emailSenderService;
	
	public static String encodePassword(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            String hashcode = no.toString(16);
            while (hashcode.length() < 32) {
                hashcode = "0" + hashcode;
            }
            return hashcode;
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

	public User findUserDetails(String email) {
		return userRepo.findByEmail(email);
	}

	public User findUserPassword(String email) throws MailException, InterruptedException {
		User u = userRepo.findByEmail(email);
		if (u != null) {
			emailSenderService.sendSimpleEmail(u.getEmail(),
					"Hello " + u.getFirstName() + "\n" + "your password is: " + u.getPassword() + "\n "
							+ "Keep Your Password Secure and Protected" + "\n" + "Warm Regards,\n" + "DIGI-DL Group,\n"
							+ "DIGI-DL Services",
					"DIGI-DL team");
		}
		return u;
	}

	@Override
	public String registerUser(User transientUser) throws MailException, InterruptedException {
		String email = transientUser.getEmail();
		User newUser = userRepo.findByEmail(email);
		if (newUser != null) {
			return "Email already Registered!!!";
		}
		System.out.println(transientUser);
		transientUser.setRole(Role.CITIZEN);
//		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
//		String encryptedpwd = bcrypt.encode(transientUser.getPassword());
//		transientUser.setPassword(encryptedpwd);
		String storedPassword= encodePassword(transientUser.getPassword());
		transientUser.setPassword(storedPassword);
		if (userRepo.save(transientUser) != null) {
			emailSenderService.sendSimpleEmail(transientUser.getEmail(),
					"Dear " + transientUser.getFirstName() + " " + transientUser.getLastName() + ",\n"
							+ "Congratulations! You have successfully registered on the DIGI-DL Portal.\n" + "\n"
							+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Registration");
			return "Registered Successfully!!";
		}
		emailSenderService.sendSimpleEmail(transientUser.getEmail(), "Registration Failed!! Try Again!!",
				"DIGI-DL Registration Failed!!");
		return "Not Registered!!";
	}

	@Override
	public ArrayList<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}


}
