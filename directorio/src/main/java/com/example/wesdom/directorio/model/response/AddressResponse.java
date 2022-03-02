package com.example.wesdom.directorio.model.response;

import java.util.List;

import com.example.wesdom.directorio.model.Address;

public class AddressResponse extends Response {

    private List<Address> data;

    public AddressResponse(boolean result, String message, int count, List<Address> data) {
        super(result, message, count);
        this.setData(data);
    }

    public List<Address> getData() {
        return data;
    }

    public void setData(List<Address> data) {
        this.data = data;
    }

}
