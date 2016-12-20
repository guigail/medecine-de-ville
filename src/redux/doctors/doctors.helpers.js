import { difference } from 'lodash'

export const getIconByContactType = (contactType) => {
  switch (contactType) {
    case 'TELEPHONE' :
      return 'phone'
    case 'TELEX' :
    case 'TELEPHONE_FAX' :
    case 'FAX' :
      return 'perm_phone_msg'
    case 'MAIL' :
      return 'email'
    case 'MOBILE' :
      return 'smartphone'
    default :
      return 'info'
  }
}

const OPENING_ALL_DAYS = [0, 1, 2, 3, 4, 5, 6]
export const getClosedDays = (openingDays = OPENING_ALL_DAYS) => {
  return difference(OPENING_ALL_DAYS, openingDays.map((openingDay) => {
    switch (openingDay.weekday) {
      case 'Dimanche' :
        return 0
      case 'Lundi' :
        return 1
      case 'Mardi' :
        return 2
      case 'Mercredi' :
        return 3
      case 'Jeudi' :
        return 4
      case 'Vendredi' :
        return 5
      case 'Samedi' :
        return 6
      default :
        return 0
    }
  }))

}