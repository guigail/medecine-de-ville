import myposition from './markers/myposition.png'
import doctor from './markers/doctor.png'
import doctorSelected from './markers/doctor.selected.png'

export const iconPosition = {
  url: `${myposition}`,
  size: new google.maps.Size(16, 16),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(8, 8),
}

export const iconDoctor = {
  url: `${doctor}`,
  size: new google.maps.Size(24, 34),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0, 17),
}

export const iconDoctorSelected = {
  url: `${doctorSelected}`,
  size: new google.maps.Size(24, 34),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0, 17),
}