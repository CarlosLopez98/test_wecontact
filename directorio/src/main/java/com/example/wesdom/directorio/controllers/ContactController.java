package com.example.wesdom.directorio.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.wesdom.directorio.model.Contact;
import com.example.wesdom.directorio.model.response.Response;
import com.example.wesdom.directorio.model.response.ContactResponse;
import com.example.wesdom.directorio.repositories.ContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET })
@RequestMapping("contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepo;

    @GetMapping
    public ResponseEntity<Response> getContacts() {
        Response response;

        List<Contact> contacts = contactRepo.findAll();

        response = new ContactResponse(true, "Successful response!", contacts.size(), contacts);
        return ResponseEntity.ok(response);
    }

    @GetMapping(value = "{contactId}")
    public ResponseEntity<Response> getContactById(@PathVariable("contactId") Long contactId) {
        Response response;
        Optional<Contact> contact = contactRepo.findById(contactId);

        if (contact.isPresent()) {
            List<Contact> data = new ArrayList<Contact>();
            data.add(contact.get());

            response = new ContactResponse(true, "Successful response!", data.size(), data);

            return ResponseEntity.ok(response);
        }

        response = new ContactResponse(false, "Contact you're looking for doesn't exists!", 0, null);
        return ResponseEntity.status(404).body(response);
    }
}