package com.example.wesdom.directorio.repositories;

import com.example.wesdom.directorio.model.Contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
