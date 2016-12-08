import { find } from 'lodash'

export const getDoctors = ({ doctors }) => doctors
export const getDoctor = ({ doctors }, id) => find(doctors, { id: id })
export const getSelected = ({ doctors }) => {
  let doctor = find(doctors, { selected: true })
  if (!doctor) {
    doctor = {}
  }
  return doctor
}
