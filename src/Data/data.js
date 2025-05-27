import eye_icon from '../Data/icons/eye.png'
import syrenge_icon from '../Data/icons/syringe.png'
import heart_icon from '../Data/icons/heart.png';
import doctor_icon from '../Data/icons/avatarBoy.png'

export const calendarData = [
		{ day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
		{ day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'] },
		{ day: 'Wed', date: 27, times: ['12:00', '__','13:00'] },
		{ day: 'Thurs', date: 28, times: ['10:00','11:00','__'] },
		{ day: 'Fri', date: 29, times: ['__','14:00', '16:00'] },
		{ day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
		{ day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
	];
export const scheduleData1 = [
    { type:'Health checkup complete' , time:'11:00AM' ,img:syrenge_icon },
    { type:'Ophthalmaologist' , time:'14:00PM' ,img:eye_icon }
  ];
export const scheduleData2 = [
    { type:'Cardiologist' , time:'12:00AM' ,img:heart_icon },
    { type:'Neurologist' , time:'16:00PM' ,img:doctor_icon }
  ];