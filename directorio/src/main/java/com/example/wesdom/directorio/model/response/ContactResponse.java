package com.example.wesdom.directorio.model.response;

import java.util.List;

import com.example.wesdom.directorio.model.Contact;

public class ContactResponse extends Response {

    private List<Contact> data;

    public ContactResponse(boolean result, String message, int count, List<Contact> data) {
        super(result, message, count);
        this.setData(data);
    }

    public List<Contact> getData() {
        return data;
    }

    public void setData(List<Contact> data) {
        this.data = data;
    }

}
