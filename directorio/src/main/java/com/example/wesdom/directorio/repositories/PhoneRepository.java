package com.example.wesdom.directorio.repositories;

import com.example.wesdom.directorio.model.Phone;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneRepository extends JpaRepository<Phone, Long> {
}
