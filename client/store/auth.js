export const actions = {
  register (context, { email, password }) {
    return this.$axios.post('/api/register', { email, password })
  },

  login (context, { email, password }) {
    if (this.$auth.busy) {
      return Promise.reject(new Error('$auth is busy.'))
    }

    return this.$auth.login({
      data: {
        grant_type: 'password',
        client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
        client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
        scope: '*',
        username: email,
        password
      }
    })
  },

  logout () {
    return this.$auth.logout()
  }
}
