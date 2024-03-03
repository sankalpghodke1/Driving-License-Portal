package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
