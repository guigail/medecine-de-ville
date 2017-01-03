export const getSearch = ({ search }) => search
export const getWhere = ({ search: { where } }) => where
export const getWhat = ({ search: { what } }) => what
export const isActive = ({ search: { where, what } }) => (where !== '' && what !== '')
export const getPosition = ({ search: { position } }) => position
