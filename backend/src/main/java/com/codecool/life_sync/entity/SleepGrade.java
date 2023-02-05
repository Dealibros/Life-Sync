package com.codecool.life_sync.entity;

public enum SleepGrade {
    REALLY_WELL(1),
    WELL(2),
    OK(3),
    SO_SO(4),
    BAD_SLEEP(5);

    private int value;


    SleepGrade(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}


