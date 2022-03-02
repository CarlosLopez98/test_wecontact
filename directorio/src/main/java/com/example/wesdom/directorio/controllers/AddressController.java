package com.example.wesdom.directorio.controllers;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

import com.example.wesdom.directorio.model.Address;
import com.example.wesdom.directorio.model.Contact;
import com.example.wesdom.directorio.model.response.Response;
import com.example.wesdom.directorio.model.response.AddressResponse;
import com.example.wesdom.directorio.repositories.AddressRepository;
import com.example.wesdom.directorio.repositories.ContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
@RequestMapping("addresses")
public class AddressController {

    @Autowired
    private AddressRepository addressRepo;
    @Autowired
    private ContactRepository contactRepo;

    @GetMapping(value = "{addressId}")
    public ResponseEntity<Response> getAddressById(@PathVariable("addressId") Long addressId) {
        Response response;
        Optional<Address> address = addressRepo.findById(addressId);

        if (address.isPresent()) {
            List<Address> data = new ArrayList<Address>();
            data.add(address.get());

            response = new AddressResponse(true, "Successful response!", data.size(), data);

            return ResponseEntity.ok(response);
        }

        response = new AddressResponse(false, "The address you're looking for doesn't exists!", 0, null);
        return ResponseEntity.status(404).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> createAddress(@RequestBody Address address) {
        Response response;

        if (address.getAddress() == null) {
            response = new AddressResponse(false, "address param is necessary!", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        if (!address.getContactId().equals(null)) {
            Optional<Contact> optContact = contactRepo.findById(address.getContactId());

            if (optContact.isPresent()) {
                Address newAddress = address;
                newAddress.setContactId(optContact.get());

                newAddress = addressRepo.save(newAddress);

                response = new AddressResponse(true, "The new address was successfuly created", 0, null);
                return ResponseEntity.status(201).body(response);
            } else {
                response = new AddressResponse(false, "The Contact you're trying to add a new Address doesn't exists!",
                        0, null);
                return ResponseEntity.badRequest().body(response);
            }
        }

        response = new AddressResponse(false, "You need to pass a contact object inside with atleast id param.", 0,
                null);
        return ResponseEntity.badRequest().body(response);
    }

    @PutMapping
    public ResponseEntity<Response> updateAddress(@RequestBody Address address) {
        Response response;

        if (address.getId() == null) {
            response = new AddressResponse(false, "Pass the address id", 0, null);
            return ResponseEntity.badRequest().body(response);
        }
        if (address.hasContact() && address.getContactId() == null) {
            response = new AddressResponse(false, "Pass the contact id", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        Optional<Address> optAddress = addressRepo.findById(address.getId());
        if (optAddress.isPresent()) {
            Address oldAddress = optAddress.get();
            if (oldAddress.getContactId() == address.getContactId()) {
                if (address.getLabel() != null)
                    oldAddress.setLabel(address.getLabel());
                if (address.getAddress() != null)
                    oldAddress.setAddress(address.getAddress());

                addressRepo.save(oldAddress);

                List<Address> data = new ArrayList<Address>();
                data.add(oldAddress);
                response = new AddressResponse(true, "The address was updated successfuly!", data.size(), data);
                return ResponseEntity.status(201).body(response);
            }

            response = new AddressResponse(false, "The contact id you pass doesn't match", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        response = new AddressResponse(false, "The address you wanna update doesn't exists!", 0, null);
        return ResponseEntity.badRequest().body(response);
    }

    @DeleteMapping(value = "{addressId}")
    public ResponseEntity<Response> deleteAddress(@PathVariable("addressId") Long addressId) {
        Response response;

        Optional<Address> optAddress = addressRepo.findById(addressId);
        if (optAddress.isPresent()) {
            addressRepo.deleteById(addressId);

            response = new AddressResponse(true, "Address deleted successfuly!", 0, null);
            return ResponseEntity.ok(response);
        }

        response = new AddressResponse(false, "The address you're trying to delete doesn't exists!", 0, null);
        return ResponseEntity.badRequest().body(response);
    }

}
