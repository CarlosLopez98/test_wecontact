package com.example.wesdom.directorio.repositories;

import com.example.wesdom.directorio.model.Address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
