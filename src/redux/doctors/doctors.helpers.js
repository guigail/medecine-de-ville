export const getIconByContactType = (contactType) => {
  switch (contactType) {
    case  'TELEPHONE' :
      return 'phone'
    case  'FAX' :
      return 'perm_phone_msg'
    case 'MAIL' :
      return 'mail'
    default :
      return ''
  }
}