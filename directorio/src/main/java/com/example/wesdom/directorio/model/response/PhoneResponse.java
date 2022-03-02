package com.example.wesdom.directorio.model.response;

import java.util.List;

import com.example.wesdom.directorio.model.Phone;

public class PhoneResponse extends Response {

    private List<Phone> data;

    public PhoneResponse(boolean result, String message, int count, List<Phone> data) {
        super(result, message, count);
        this.setData(data);
    }

    public List<Phone> getData() {
        return data;
    }

    public void setData(List<Phone> data) {
        this.data = data;
    }

}
