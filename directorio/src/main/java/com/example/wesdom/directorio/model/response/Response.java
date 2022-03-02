package com.example.wesdom.directorio.model.response;

public abstract class Response {
    private boolean result;
    private String message;
    private int count;

    public Response(boolean result, String message, int count) {
        this.result = result;
        this.message = message;
        this.count = count;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
