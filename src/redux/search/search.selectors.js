export const getSearch = ({ search }) => search
export const getWhere = ({ search: { where } }) => where
export const getWho = ({ search: { who } }) => who
export const isActive = ({ search: { where, who } }) => (where !== '' && who !== '')
export const getPosition = ({ search: { position } }) => position