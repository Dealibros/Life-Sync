import './styles.css';
import moment from 'moment';
import React, {useEffect} from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {HOURS, MINUTES} from '../../../Constants';

const NewEventTime = ({sortTime, setSortTime, setNewEvent}) => {
    const formatDate = (timeValue) => {
        const fullDate = moment(timeValue.date + timeValue.time.hours + timeValue.time.minutes + timeValue.time.ap, 'yyyy-MM-DD h:m A',).format('yyyy-MM-DDTHH:mm');
        return fullDate;
    };

    const onStartHourChange = (value) => {
        setSortTime({
            ...sortTime, startingTime: {
                ...sortTime.startingTime, time: {...sortTime.startingTime.time, hours: value},
            },
        });
    };

    const onStartMinChange = (value) => {
        setSortTime({
            ...sortTime, startingTime: {
                ...sortTime.startingTime, time: {...sortTime.startingTime.time, minutes: value},
            },
        });
    };

    const onStartAPChange = (value) => {
        setSortTime({
            ...sortTime, startingTime: {
                ...sortTime.startingTime, time: {...sortTime.startingTime.time, ap: value},
            },
        });
    };

    const onEndHourChange = (value) => {
        setSortTime({
            ...sortTime, endingTime: {
                ...sortTime.endingTime, time: {...sortTime.endingTime.time, hours: value},
            },
        });
    };

    const onEndMinChange = (value) => {
        setSortTime({
            ...sortTime, endingTime: {
                ...sortTime.endingTime, time: {...sortTime.endingTime.time, minutes: value},
            },
        });
    };

    const onEndAPChange = (value) => {
        setSortTime({
            ...sortTime, endingTime: {
                ...sortTime.endingTime, time: {...sortTime.endingTime.time, ap: value},
            },
        });
    };

    useEffect(() => {
        const validateTimeFirst = !Object.values(sortTime.startingTime.time).some((item) => item == null || item.length === 0,);
        const validateTimeSecond = !Object.values(sortTime.endingTime.time).some((item) => item == null || item.length === 0,);
        if (validateTimeFirst && validateTimeSecond) {
            setNewEvent((newEvent) => ({
                ...newEvent,
                startingTime: formatDate(sortTime.startingTime),
                endingTime: formatDate(sortTime.endingTime),
            }));
        }
    }, [sortTime]);

    return (<>
            <div className="time-section">
                <label className="time-label">Time</label>{' '}
                <div className="time-minute-div">
                    <div>
                        <select
                            className="time-box"
                            onChange={(ev) => onStartHourChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            {HOURS.map((hour, i) => (<option key={i} className="option">
                                    {hour}
                                </option>))}
                        </select>
                        :
                        <select
                            className="time-box"
                            onChange={(ev) => onStartMinChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            {MINUTES.map((min, i) => (<option key={i} className="option">
                                    {min}
                                </option>))}
                        </select>
                        :
                        <select
                            className="time-box"
                            onChange={(ev) => onStartAPChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            <option className="option">AM</option>
                            <option className="option">PM</option>
                        </select>
                    </div>

                    <BsArrowRight className="arrow-right"/>

                    <div>
                        <select
                            className="time-box"
                            onChange={(ev) => onEndHourChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            {HOURS.map((hour, i) => (<option key={i}>{hour}</option>))}
                        </select>
                        :
                        <select
                            className="time-box"
                            onChange={(ev) => onEndMinChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            {MINUTES.map((min, i) => (<option key={i}>{min}</option>))}
                        </select>
                        :
                        <select
                            className="time-box"
                            onChange={(ev) => onEndAPChange(ev.target.value)}
                        >
                            <option className="option" hidden></option>
                            <option className="option">AM</option>
                            <option className="option">PM</option>
                        </select>
                    </div>
                </div>
            </div>
        </>);
};

export default NewEventTime;
