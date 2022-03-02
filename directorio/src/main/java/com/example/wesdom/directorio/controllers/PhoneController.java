package com.example.wesdom.directorio.controllers;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import com.example.wesdom.directorio.model.Phone;
import com.example.wesdom.directorio.model.Contact;
import com.example.wesdom.directorio.model.response.Response;
import com.example.wesdom.directorio.model.response.PhoneResponse;
import com.example.wesdom.directorio.repositories.ContactRepository;
import com.example.wesdom.directorio.repositories.PhoneRepository;

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
@RequestMapping("phones")
public class PhoneController {

    @Autowired
    private PhoneRepository phoneRepo;
    @Autowired
    private ContactRepository contactRepo;

    @GetMapping(value = "{phoneId}")
    public ResponseEntity<Response> getPhoneById(@PathVariable("phoneId") Long phoneId) {
        Response response;
        Optional<Phone> phone = phoneRepo.findById(phoneId);

        if (phone.isPresent()) {
            List<Phone> data = new ArrayList<Phone>();
            data.add(phone.get());

            response = new PhoneResponse(true, "Successful response!", data.size(), data);

            return ResponseEntity.ok(response);
        }

        response = new PhoneResponse(false, "The phone you're looking for doesn't exists!", 0, null);
        return ResponseEntity.status(404).body(response);
    }

    @PostMapping
    public ResponseEntity<Response> createPhone(@RequestBody Phone phone) {
        Response response;

        if (phone.getNumber() == null) {
            response = new PhoneResponse(false, "number param is necessary", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        if (phone.getContactId() != null) {
            Optional<Contact> optContact = contactRepo.findById(phone.getContactId());

            if (optContact.isPresent()) {
                Phone newPhone = phone;
                newPhone.setContactId(optContact.get());

                newPhone = phoneRepo.save(newPhone);

                response = new PhoneResponse(true, "The new phone was successfuly created!", 0, null);
                return ResponseEntity.status(201).body(response);
            } else {
                response = new PhoneResponse(false, "The contact you're trying to add a new phone doesn't exists!", 0,
                        null);
                return ResponseEntity.badRequest().body(response);
            }
        }

        response = new PhoneResponse(false, "You need to pass a contact object inside with atleast id param.", 0, null);
        return ResponseEntity.badRequest().body(response);
    }

    @PutMapping
    public ResponseEntity<Response> updatePhone(@RequestBody Phone phone) {
        Response response;

        if (phone.getId() == null) {
            response = new PhoneResponse(false, "Pass the phone id", 0, null);
            return ResponseEntity.badRequest().body(response);
        }
        if (phone.hasContact() && phone.getContactId() == null) {
            response = new PhoneResponse(false, "Pass the contact id", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        Optional<Phone> optPhone = phoneRepo.findById(phone.getId());
        if (optPhone.isPresent()) {
            Phone oldPhone = optPhone.get();
            if (oldPhone.getContactId() == phone.getContactId()) {
                if (phone.getCountry() != null)
                    oldPhone.setCountry(phone.getCountry());
                if (phone.getLabel() != null)
                    oldPhone.setLabel(phone.getLabel());
                if (phone.getNumber() != null)
                    oldPhone.setNumber(phone.getNumber());

                phoneRepo.save(oldPhone);

                List<Phone> data = new ArrayList<Phone>();
                data.add(oldPhone);
                response = new PhoneResponse(true, "The phone was updated successfuly!", data.size(), data);
                return ResponseEntity.status(201).body(response);
            }

            response = new PhoneResponse(false, "The contact id you pass doesn't match", 0, null);
            return ResponseEntity.badRequest().body(response);
        }

        response = new PhoneResponse(false, "The phone you wanna update doesn't exists!", 0, null);
        return ResponseEntity.badRequest().body(response);
    }

    @DeleteMapping(value = "{phoneId}")
    public ResponseEntity<Response> deletePhone(@PathVariable("phoneId") Long phoneId) {
        Response response;

        Optional<Phone> optPhone = phoneRepo.findById(phoneId);
        if (optPhone.isPresent()) {
            phoneRepo.deleteById(phoneId);

            response = new PhoneResponse(true, "Phone deleted successfuly!", 0, null);
            return ResponseEntity.ok(response);
        }

        response = new PhoneResponse(false, "The phone you're trying to delete doesn't exists!", 0, null);
        return ResponseEntity.badRequest().body(response);
    }
}
