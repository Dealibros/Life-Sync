package com.codecool.life_sync.entity;

public enum MoodGrade {
    GREAT(1),
    GOOD(2),
    NOT_BAD(3),
    NOT_GOOD(4),
    ROUGH_DAY(5);

    private int value;


    MoodGrade(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
