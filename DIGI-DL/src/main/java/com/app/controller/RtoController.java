package com.app.controller;

import java.util.List;

import org.eclipse.jdt.internal.compiler.env.IModule.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exception.UserHandlingException;
import com.app.dto.ResponseDTO;
import com.app.dto.RtoOfficerDTO;
import com.app.pojos.Images;
import com.app.pojos.LearningLicense;
import com.app.pojos.LearningStatus;
import com.app.pojos.PermanentLicense;
import com.app.pojos.PermanentStatus;
import com.app.pojos.RtoOfficer;
import com.app.pojos.User;
import com.app.repository.LearningRepository;
import com.app.repository.PermanentRepository;
import com.app.repository.RtoOfficerRepository;
import com.app.service.IEmailSenderService;
import com.app.service.IImageService;
import com.app.service.ILearningService;
import com.app.service.IPermanentService;
import com.app.service.IRtoOfficerService;
import com.app.service.IUserService;
import com.app.serviceimpl.RtoOfficerServiceImpl;
import com.app.serviceimpl.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rtoofficer")
public class RtoController {

	// dependency : learning repository
	@Autowired
	private LearningRepository learningRepo;

	// dependency : permanent repository
	@Autowired
	private PermanentRepository permanentRepo;

	// dependency : service layer i/f
	@Autowired
	private ILearningService learningService;

	// dependency : service layer i/f
	@Autowired
	private IPermanentService permanentService;

	// dependency : email service layer i/f
	@Autowired
	private IEmailSenderService emailSenderService;

	@Autowired
	private IUserService userService;
	
	@Autowired
	private RtoOfficerRepository rtoRepo;
	
	@Autowired
	private IRtoOfficerService rtoService;
	
	@Autowired
	private IImageService imageService;
	
	// default constr
	public RtoController() {
		System.out.println(getClass().getName());
	}
	
	@PostMapping("/rtoLogin")
	public ResponseDTO<?> rtoLoginForm(@RequestBody RtoOfficerDTO officer){
		try {
			RtoOfficer rto = rtoService.findRtoDetails(officer.getEmail());
			if(rto.getEmail().equalsIgnoreCase(officer.getEmail()) && rto.getPassword().equals(officer.getPassword()))
				return new ResponseDTO(HttpStatus.OK, "Successfully Logged in", rto);
				else
					return new ResponseDTO(HttpStatus.BAD_REQUEST, "No User Found", null);
		}catch (Exception e) {
			return new ResponseDTO(HttpStatus.BAD_REQUEST, "failed to login", null);
		}
	}

	// Get method for showing learning list
	@GetMapping("/llist")
	public ResponseDTO<?> getALLLearning(){
		List<LearningLicense> licenses = learningRepo.findAll();
		return new ResponseDTO(HttpStatus.OK,"Successfully collected All PEnding Licenses",licenses);
	}
	@GetMapping("/plist")
	public ResponseDTO<?> getALLPermanent(){
		List<PermanentLicense> licenses = permanentRepo.findAll();
		return new ResponseDTO(HttpStatus.OK,"Successfully collected All PEnding Licenses",licenses);
	}
	// Get method for showing learning 
	@GetMapping("/learning")
	public ResponseDTO<?> getLearning(@RequestParam("id") int id){
		System.out.println(id);
		LearningLicense ll = learningService.findById(id).orElseThrow(()-> new RuntimeException());
		System.out.println(ll);
		
		return new ResponseDTO(HttpStatus.OK,"License collected successfully",ll);
	}
	// Get method for showing permanent
	@GetMapping("/permanent")
	public ResponseDTO<?> getPermanent(@RequestParam("id") int id){
		System.out.println(id);
		PermanentLicense pl = permanentService.findById(id).orElseThrow(()-> new RuntimeException());
		System.out.println(pl);
		
		return new ResponseDTO(HttpStatus.OK,"License collected successfully",pl);
	}


	// Post method for editing the LL status
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@PostMapping("/ledit")
	public ResponseDTO<?> editLearningTable(@RequestBody LearningLicense l)
			throws MailException, InterruptedException {
		LearningStatus status = l.getLearningStatus();
		int id = l.getApplicantId();
		//LearningStatus status = LearningStatus.valueOf(l.getLearningStatus());
		LearningLicense ll = learningService.findById(id).get();
		ll.setLearningStatus(status);
		if (status == LearningStatus.WRITTENTESTPASSED || status == LearningStatus.COMPLETED) {
			ll.setWrittenTestFlag("Y");
		}

		learningService.updateLicense(ll);

	//	 checks whether written test slot is issued or not
		if (ll.getLearningStatus() == LearningStatus.WRITTENSLOTISSUED) {
			// if issued then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(ll.getEmail(),
					"Dear " + ll.getFirstName() + " " + ll.getLastName() + ",\n\n"
							+ "Your Learning License Test will be held on " + ll.getAppointmentDate() + " at "
							+ ll.getAppointmentTime() + "\n" + "Wish you the Best of Luck for the test process.\n"
							+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
							+ "\n" + "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Learning Test");
		}

		// checks whether written test passed/Completed or not
		if (ll.getLearningStatus() == LearningStatus.WRITTENTESTPASSED
				|| ll.getLearningStatus() == LearningStatus.COMPLETED) {
			// if passed then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(ll.getEmail(), "Dear " + ll.getFirstName() + " " + ll.getLastName()
					+ ",\n\n" + "Congratulations, You have successfully cleared the Written Exam For License.\n"
					+ "Learning License is valid for next 6 months only. So, apply for permanent license within the due date.\n"
					+ "\n" + "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services\n",
					"DIGI-DL Learning Test");
		}

		// checks whether written test failed or not
		if (ll.getLearningStatus() == LearningStatus.WRITTENTESTFAILED) {
			// if failed then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(ll.getEmail(),
					"Dear " + ll.getFirstName() + " " + ll.getLastName() + ",\n\n"
							+ "We are Sorry, but you just failed the Written Exam for License\n"
							+ "Your application form is cancelled. Please apply again.\n" + "\n" + "Warm Regards,\n"
							+ "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Learning Test");
		}

		// checks whether applicant is rejected or not
		if (ll.getLearningStatus() == LearningStatus.REJECTED) {
			// if rejected then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(ll.getEmail(), "Dear " + ll.getFirstName() + " " + ll.getLastName()
					+ ",\n\n"
					+ "Your learner license application form is rejected, Please fill the form again carefully.\n"
					+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services", "DIGI-DL Driving Test");
		}

		return new ResponseDTO(HttpStatus.OK,"successfully updated",ll);
	}


	// Post method for editing the PL applicant STATUS
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping("/pedit")
	public ResponseDTO<?> editPermanentTable(@RequestBody PermanentLicense p)
			throws MailException, InterruptedException {
		
		PermanentStatus status = p.getPermanentStatus();

		PermanentLicense permanentLicense = permanentService.findById(p.getApplicantId()).get();
		permanentLicense.setPermanentStatus(status);

		if (status == PermanentStatus.DRIVINGPASS || status == PermanentStatus.COMPLETED) {
			permanentLicense.setWrittenTestFlag("Y");
		}

		permanentService.updateLisence(permanentLicense);

		// checks whether driving test slot is issued or not
		if (permanentLicense.getPermanentStatus() == PermanentStatus.DRIVINGSLOTISSUED) {
			// if issued then sends the mail to the applicant
			if(permanentLicense.getDistrict().equalsIgnoreCase("Aurangabad")) {
			emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
					"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
							+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
							+ " at " + permanentLicense.getAppointmentTime() + "\n"
							+ "Test Centre : MH-20, RTO Office Aurangabad\n"
							+ "Plot No 20, Sambhaji Nagar, near Railway station road, Aurangabad,\n\n"
							+ "Wish you the Best of Luck for the test process.\n"
							+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
							+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Driving Test");
			}
			
			if(permanentLicense.getDistrict().equalsIgnoreCase("Pune")) {
				emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
						"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
								+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
								+ " at " + permanentLicense.getAppointmentTime() + "\n"
								+ "Test Centre : MH-12, RTO Office  Pune\n"
								+ "Sector 18C, B-63, Phase 3, Hinjewadi Market, Near Mega Police, Pune,\n\n"
								+ "Wish you the Best of Luck for the test process.\n"
								+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
								+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
						"DIGI-DL Driving Test");
				}
//			if(permanentLicense.getDistrict().equalsIgnoreCase("Sangli")) {
//				emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
//						"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
//								+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
//								+ " at " + permanentLicense.getAppointmentTime() + "\n"
//								+ "Test Centre : MH-10, RTO Office Sangli\n"
//								+ "Rto Office, Vasantdada Industrial Estate, Sangli, Sangli Miraj Kupwad, Maharashtra 416416\n\n"
//								+ "Wish you the Best of Luck for the test process.\n"
//								+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
//								+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
//						"DIGI-DL Driving Test");
//				}
//			if(permanentLicense.getDistrict().equalsIgnoreCase("Kolhapur")) {
//				emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
//						"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
//								+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
//								+ " at " + permanentLicense.getAppointmentTime() + "\n"
//								+ "Test Centre : MH-09, RTO Office Kolhapur\n"
//								+ "P67R+V35, 213, E Ward, Tarabai Park, Warna Colony, Unnamed Road, Warna Colony, Kolhapur, Maharashtra 416003,\n\n"
//								+ "Wish you the Best of Luck for the test process.\n"
//								+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
//								+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
//						"DIGI-DL Driving Test");
//				}
//			if(permanentLicense.getDistrict().equalsIgnoreCase("Mumbai")) {
//				emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
//						"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
//								+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
//								+ " at " + permanentLicense.getAppointmentTime() + "\n"
//								+ "Test Centre : MH-02, RTO Office Mumbai\n"
//								+ "XRF8+8MM, Bodyguard Ln, Mumbai Central West, Arya Nagar, Tulsiwadi, Mumbai Central, Mumbai, Maharashtra 400034,\n\n"
//								+ "Wish you the Best of Luck for the test process.\n"
//								+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
//								+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
//						"DIGI-DL Driving Test");
//				}
//			if(permanentLicense.getDistrict().equalsIgnoreCase("Satara")) {
//				emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
//						"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
//								+ "Your Driving License Test will be held on " + permanentLicense.getAppointmentDate()
//								+ " at " + permanentLicense.getAppointmentTime() + "\n"
//								+ "Test Centre : MH-11, RTO Office Satara\n"
//								+ "M2Q7+V64, Ajinkya Colony, Powai Naka, Satara, Maharashtra 415001,\n\n"
//								+ "Wish you the Best of Luck for the test process.\n"
//								+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
//								+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
//						"DIGI-DL Driving Test");
//				}
			

		}

		// checks whether driving test passed or not
		if (permanentLicense.getPermanentStatus() == PermanentStatus.DRIVINGPASS) {
			// if passed then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
					"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
							+ "Congratulations, You have successfully passed the Driving Test For License.\n"
							+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
							+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Driving Test");

		}

		// checks whether status is completed or not
		if (permanentLicense.getPermanentStatus() == PermanentStatus.COMPLETED) {
			// if completed then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(permanentLicense.getEmail(),
					"Dear " + permanentLicense.getFirstName() + " " + permanentLicense.getLastName() + ",\n\n"
							+ "Your Permanent Driving License is out for delievery, and will reach you in some days.\n"
							+ "Track Your License from here: google.com"
							+ "In case you have any query, you can connect us at rtocdac@gmail.com\n" + "\n"
							+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services",
					"DIGI-DL Permanent Driving License");

		}

		// checks whether driving test failed or not
		if (permanentLicense.getPermanentStatus() == PermanentStatus.DRIVINGFAIL) {
			// if failed then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(permanentLicense.getEmail(), "Dear " + permanentLicense.getFirstName()
					+ " " + permanentLicense.getLastName() + ",\n\n"
					+ "We are Sorry, but you just failed the Written Exam for License\n"
					+ "Your permanent license application form is cancelled,Please fill again to apply for re-test.\n"
					+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services", "DIGI-DL Driving Test");

		}

		// checks whether applicant is rejected or not
		if (permanentLicense.getPermanentStatus() == PermanentStatus.REJECTED) {
			// if rejected then sends the mail to the applicant
			emailSenderService.sendSimpleEmail(permanentLicense.getEmail(), "Dear " + permanentLicense.getFirstName()
					+ " " + permanentLicense.getLastName() + ",\n\n"
					+ "Your permanent license application form is cancelled,Please fill the form again carefully.\n"
					+ "Warm Regards,\n" + "DIGI-DL Group,\n" + "DIGI-DL Services", "DIGI-DL Driving Test");
		}
		return new ResponseDTO(HttpStatus.OK,"successfully updated",permanentLicense);
	}

	// Get method for deleting the PL applicant
	@DeleteMapping("/pdelete/{id}")
	public ResponseDTO<?> deletePermanenttable(@PathVariable("id") int id) {

		permanentService.deletePermanentLicenseById(id);

		return new ResponseDTO(HttpStatus.OK,"successfully deleted",null);
	}
	@DeleteMapping("/ldelete/{id}")
	public ResponseDTO<?> deleteLearningtable(@PathVariable("id") int id) {
		
		learningService.deleteLearningLicenseById(id);
		
		return new ResponseDTO(HttpStatus.OK,"successfully deleted",null);
	}
}
