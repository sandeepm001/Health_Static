import React from 'react'
import '../Styles/Appointment.css'
import right_arrow_icon from '../Data/icons/right-arrow_2.png'
import left_arrow_icon from '../Data/icons/left-arrow_2.png'
import tooth_icon from '../Data/icons/tooth.png'
import arm_icon from '../Data/icons/leg.png'
import { calendarData,scheduleData1,scheduleData2 } from '../Data/data'

const Appointment = () => {
  
  return (
    <div className="appointment">
      <div className="calender">
        <div className="calender-top">
          <h2>October 2021</h2>
          <div className="arrows">
            <img src={left_arrow_icon} alt="" />
            <img src={right_arrow_icon} alt="" />
          </div>
        </div>
        <div className="calender-dates">
          {calendarData.map((day,idx)=> (
            <div key={idx} className={`${day.day === 'Sun' ? 'sunday' : ''} calender-day ${idx===1?'active':""} `}>
              <div className="day-label">{day.day}</div>
              <div className="date-label">{day.date}</div>
              {day.times.map((time, i) => {
                return (
                  <div key={i} className={`timeslot ${
                    day.day === 'Tues' && time === '09:00'
                    ? 'selected-tues'
                    : (day.day === 'Thurs' && time === '11:00') ||
                      (day.day === 'Sat' && time === '12:00') ||
                      (day.day === 'Sun' && time === '09:00')
                    ? 'selected-other'
                    : ''
                  }`}>
                    {time}
                  </div>
                );
              })}

            </div>

          ))}

        </div>
      </div>
      <div className="ap-doc">
        <div className="dent">
          <div className="tooth">
            <h2>Dentist</h2>
            <img src={tooth_icon} alt="" />
          </div>
          <p>09:00-11:00</p>
          <p>Dr.Cameron Williamson</p>
        </div>
        <div className="physio">
          <div className="arm">
            <h2>Physiotherapy Appointment</h2>
            <img src={arm_icon} alt="" />
          </div>
          <p>11:00-12:00</p>
          <p>Dr.Kevin Djones</p>
        </div>
      </div>
      <div className="schedule">
        <h1>The Upcomming Schedule</h1>
        <h2>On Thursday</h2>
        <div className="schedule-box">
          {scheduleData1.map((item,i) =>(
            <div className="s-box">
              <div className="s-box1">
                <div className="type-label">{item.type}</div>
                <img src={item.img} alt="" />
              </div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
        <h2>On Saturday</h2>
        <div className="schedule-box">
          {scheduleData2.map((item,i) =>(
            <div className="s-box">
              <div className="s-box1">
                <div className="type-label">{item.type}</div>
                <img src={item.img} alt="" />
              </div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appointment