import { find, filter } from 'lodash'

export const getDoctors = ({ doctors }) => doctors
export const getDoctor = ({ doctors }, id) => find(doctors, { id })

export const getSelected = ({ doctors }) => {
  let doctor = find(doctors, { ui: { selected: true } })
  if (!doctor) {
    doctor = { id: -1 }
  }
  return doctor
}


export const getVisible = ({ doctors }) => filter(doctors, { ui: { visible: true } })
