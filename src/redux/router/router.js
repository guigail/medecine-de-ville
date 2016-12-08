export default {
  '/': {
    title: 'HOME',
    '/doctors?': {
      title: 'Docteurs',
      '/doctors/:id': {
        title: 'Docteur',
      },
    },
  },
}
